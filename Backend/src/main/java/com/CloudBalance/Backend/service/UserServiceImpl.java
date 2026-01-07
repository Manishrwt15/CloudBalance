package com.CloudBalance.Backend.service;

import com.CloudBalance.Backend.Mapper.UserMapper;
import com.CloudBalance.Backend.config.PasswordConfig;
import com.CloudBalance.Backend.dto.UserCreateDTO;
import com.CloudBalance.Backend.dto.UserResponseDTO;
import com.CloudBalance.Backend.dto.UserUpdateDTO;
import com.CloudBalance.Backend.exception.ResourceNotFountException;
import com.CloudBalance.Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.CloudBalance.Backend.model.User;
import org.springframework.web.client.ResourceAccessException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{
    private final UserRepository repo;
    private final PasswordConfig passwordConfig;

    @Autowired
    public UserServiceImpl(UserRepository repo, PasswordConfig passwordConfig){
        this.repo = repo;
        this.passwordConfig = passwordConfig;
    }

    @Override
    public List<UserResponseDTO> getAllUsers(){
        return repo.findAll().stream().map(UserMapper :: toResponseDTO).collect(Collectors.toList());
    }

    @Override
    public UserResponseDTO createUser(UserCreateDTO userDTO){
//        if (repo.existsByEmail(userDTO.getEmail())) {
//            throw new DuplicateResourceException("Email already in use: " + userDTO.getEmail());
//        }

        User user = UserMapper.fromCreateDTO(userDTO);
        user.setPassword(passwordConfig.passwordEncoder().encode(userDTO.getPassword()));

        User saved = repo.save(user);
        return UserMapper.toResponseDTO(saved);
    }

    @Override
    public UserResponseDTO updateUser(Long id, UserUpdateDTO userDTO){
        User user = repo.findById(id)
                    .orElseThrow(() -> new ResourceAccessException("User not found with id: " + id));

//        if (!user.getEmail().equals(userDTO.getEmail()) && repo.existsByEmail(userDTO.getEmail())) {
//            throw new DuplicateResourceException("Email already in use: " + userDTO.getEmail());
//        }

        UserMapper.applyUpdateDTO(user, userDTO);
        User saved = repo.save(user);
        return UserMapper.toResponseDTO(saved);
    }

    @Override
    public UserResponseDTO getUserById(Long id) {
        User user =  repo.findById(id)
                     .orElseThrow(() -> new ResourceNotFountException("User not found with" + id));
        return UserMapper.toResponseDTO(user);
    }
}