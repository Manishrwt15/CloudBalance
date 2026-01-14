package com.CloudBalance.Backend.service;

import com.CloudBalance.Backend.Mapper.AccountMapper;
import com.CloudBalance.Backend.dto.AccountCreateDTO;
import com.CloudBalance.Backend.dto.AccountResponseDTO;
import com.CloudBalance.Backend.exception.DuplicateResourceException;
import com.CloudBalance.Backend.exception.ResourceNotFoundException;
import com.CloudBalance.Backend.model.Account;
import com.CloudBalance.Backend.model.User;
import com.CloudBalance.Backend.repository.AccountRepository;
import com.CloudBalance.Backend.repository.UserRepository;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.CloudBalance.Backend.model.Role.CUSTOMER;

@Service
public class AccountServiceImpl implements AccountService{

    private final AccountRepository repo;
    private final UserRepository userRepository;

    public AccountServiceImpl(AccountRepository repo, UserRepository userRepository){
        this.repo = repo;
        this.userRepository = userRepository;
    }

    @Override
    public AccountResponseDTO createAccount(AccountCreateDTO createDTO) {
        if (repo.existsByAccountId(createDTO.getAccountId())) {
            throw new DuplicateResourceException("AccountId already exists");
        }

        if (repo.existsByArn(createDTO.getArn())) {
            throw new DuplicateResourceException("Arn already exists");
        }

        Account account = AccountMapper.toEntity(createDTO);
        Account saved = repo.save(account);

        return AccountMapper.toResponseDTO(saved);
    }

    @Override
    public AccountResponseDTO getAccountById(Long id) {
        Account account = repo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Account not found with id" + id));
        return AccountMapper.toResponseDTO(account);
    }

    @Override
    public List<AccountResponseDTO> getAllAccounts() {
        return repo.findAll().stream().map(AccountMapper :: toResponseDTO).collect(Collectors.toList());
    }

    @Override
    public List<AccountResponseDTO> getAccountsByCustomerEmail(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));

        Set<Account> accounts = user.getAccounts();
        return accounts.stream().map(AccountMapper::toResponseDTO).toList();
    }

}
