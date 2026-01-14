package com.CloudBalance.Backend.service;

import com.CloudBalance.Backend.Mapper.UserMapper;
import com.CloudBalance.Backend.config.PasswordConfig;
import com.CloudBalance.Backend.dto.UserCreateDTO;
import com.CloudBalance.Backend.dto.UserResponseDTO;
import com.CloudBalance.Backend.dto.UserUpdateDTO;
import com.CloudBalance.Backend.exception.DuplicateResourceException;
import com.CloudBalance.Backend.exception.ResourceNotFoundException;
import com.CloudBalance.Backend.model.Account;
import com.CloudBalance.Backend.repository.AccountRepository;
import com.CloudBalance.Backend.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.CloudBalance.Backend.model.User;
import org.springframework.web.client.ResourceAccessException;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.CloudBalance.Backend.model.Role.CUSTOMER;

@Service
public class UserServiceImpl implements UserService{
    private final UserRepository repo;
    private final PasswordConfig passwordConfig;
    private final AccountRepository accountRepository;

    @Autowired
    public UserServiceImpl(UserRepository repo, PasswordConfig passwordConfig, AccountRepository accountRepository){
        this.repo = repo;
        this.passwordConfig = passwordConfig;
        this.accountRepository = accountRepository;
    }

    @Override
    public List<UserResponseDTO> getAllUsers(){
        return repo.findAll().stream().map(UserMapper :: toResponseDTO).collect(Collectors.toList());
    }

    @Transactional
    @Override
    public UserResponseDTO createUser(UserCreateDTO userDTO){
        if (repo.existsByEmail(userDTO.getEmail())) {
            throw new DuplicateResourceException("Email already in use: " + userDTO.getEmail());
        }

        if (userDTO.getRole() == CUSTOMER) {
            if (userDTO.getAccountIds() == null || userDTO.getAccountIds().isEmpty()) {
                throw new IllegalArgumentException("Customer must have at least one account assigned");
            }
        }

        User user = UserMapper.fromCreateDTO(userDTO);
        user.setPassword(passwordConfig.passwordEncoder().encode(userDTO.getPassword()));

        if(userDTO.getRole() == CUSTOMER && userDTO.getAccountIds() != null && !userDTO.getAccountIds().isEmpty()) {

            List<Account> accounts = accountRepository.findAllById(userDTO.getAccountIds());

            if (accounts.size() != userDTO.getAccountIds().size()) {
                throw new IllegalArgumentException("One or more Account IDs are invalid");
            }

            for (Account account : accounts) {
                user.addAccount(account);
            }
        }
        User saved = repo.save(user);
        return UserMapper.toResponseDTO(saved);
    }

    @Transactional
    @Override
    public UserResponseDTO updateUser(Long id, UserUpdateDTO userDTO){
        User user = repo.findById(id)
                    .orElseThrow(() -> new ResourceAccessException("User not found with id: " + id));

        if (!user.getEmail().equals(userDTO.getEmail()) && repo.existsByEmail(userDTO.getEmail())) {
            throw new DuplicateResourceException("Email already in use: " + userDTO.getEmail());
        }

        UserMapper.applyUpdateDTO(user, userDTO);

        Set<Account> oldAccounts = new HashSet<>(user.getAccounts());
        oldAccounts.forEach(user::removeAccount);

        if(userDTO.getRole() == CUSTOMER){
            if (userDTO.getAccountIds() == null || userDTO.getAccountIds().isEmpty()) {
                throw new IllegalArgumentException("Customer must have at least one account assigned");
            }

            List<Account> accounts = accountRepository.findAllById(userDTO.getAccountIds());

            if (accounts.size() != userDTO.getAccountIds().size()) {
                throw new IllegalArgumentException("One or more Account IDs are invalid");
            }

            accounts.forEach(user::addAccount);
        }

        User saved = repo.save(user);
        return UserMapper.toResponseDTO(saved);
    }

    @Override
    public UserResponseDTO getUserById(Long id) {
        User user =  repo.findById(id)
                     .orElseThrow(() -> new ResourceNotFoundException("User not found with" + id));
        return UserMapper.toResponseDTO(user);
    }
}