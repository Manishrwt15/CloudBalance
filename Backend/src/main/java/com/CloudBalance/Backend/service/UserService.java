package com.CloudBalance.Backend.service;


import com.CloudBalance.Backend.dto.UserCreateDTO;
import com.CloudBalance.Backend.dto.UserResponseDTO;
import com.CloudBalance.Backend.dto.UserUpdateDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    List<UserResponseDTO> getAllUsers();
    UserResponseDTO createUser(UserCreateDTO user);
    UserResponseDTO updateUser(Long id, UserUpdateDTO user);
    UserResponseDTO getUserById(Long id);
}
