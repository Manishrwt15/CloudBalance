package com.CloudBalance.Backend.controller;


import com.CloudBalance.Backend.dto.LoginRequestDTO;
import com.CloudBalance.Backend.dto.LoginResponseDTO;
import com.CloudBalance.Backend.dto.SignupRequestDTO;
import com.CloudBalance.Backend.dto.SignupResponseDTO;
import com.CloudBalance.Backend.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cloudbalance")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }


    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO loginRequestDTO) {
        return ResponseEntity.ok(authService.login(loginRequestDTO));
    }

    @PostMapping("/signup")
    public ResponseEntity<SignupResponseDTO> signup(@RequestBody SignupRequestDTO signupRequestDTO)  {
        return ResponseEntity.ok(authService.signup(signupRequestDTO));
    }
}



