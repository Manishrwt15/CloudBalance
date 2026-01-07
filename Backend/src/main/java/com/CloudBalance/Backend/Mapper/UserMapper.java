package com.CloudBalance.Backend.Mapper;

import com.CloudBalance.Backend.dto.UserCreateDTO;
import com.CloudBalance.Backend.dto.UserResponseDTO;
import com.CloudBalance.Backend.dto.UserUpdateDTO;
import com.CloudBalance.Backend.model.User;


public class UserMapper {

    public static UserResponseDTO toResponseDTO (User user){
        if(user == null) return null;
        return new UserResponseDTO(
                user.getId(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getRole()
        );
    }

    public static User fromCreateDTO (UserCreateDTO createDTO){
        User user = new User();
        user.setFirstName(createDTO.getFirstName());
        user.setLastName(createDTO.getLastName());
        user.setEmail(createDTO.getEmail());
        user.setRole(createDTO.getRole());
        return user;
    }

    public static void applyUpdateDTO (User user, UserUpdateDTO updateDTO){
        user.setFirstName(updateDTO.getFirstName());
        user.setLastName(updateDTO.getLastName());
        user.setEmail(updateDTO.getEmail());
        user.setRole(updateDTO.getRole());
    }
}
