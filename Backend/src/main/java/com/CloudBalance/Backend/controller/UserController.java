package com.CloudBalance.Backend.controller;

import com.CloudBalance.Backend.dto.UserCreateDTO;
import com.CloudBalance.Backend.dto.UserResponseDTO;
import com.CloudBalance.Backend.dto.UserUpdateDTO;
import com.CloudBalance.Backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dashboard")
public class UserController {

    private final UserService service;


    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping("/user")
    public ResponseEntity<List<UserResponseDTO>> getAllUser() {
        return ResponseEntity.ok(service.getAllUsers());
    }

    @PostMapping("/user/add")
    @PreAuthorize("hasRole('admin')")
    public ResponseEntity<UserResponseDTO> create( @RequestBody UserCreateDTO userDTO) {
        UserResponseDTO saved = service.createUser(userDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/user/edit/{id}")
    @PreAuthorize("hasRole('admin')")
    public ResponseEntity<UserResponseDTO> update( @PathVariable Long id, @RequestBody UserUpdateDTO userDTO) {
        return ResponseEntity.ok(service.updateUser(id, userDTO));
    }
}
