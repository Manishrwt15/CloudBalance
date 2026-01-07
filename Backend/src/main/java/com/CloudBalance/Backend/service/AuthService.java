package com.CloudBalance.Backend.service;

import com.CloudBalance.Backend.dto.LoginRequestDTO;
import com.CloudBalance.Backend.dto.LoginResponseDTO;
import com.CloudBalance.Backend.dto.SignupRequestDTO;
import com.CloudBalance.Backend.dto.SignupResponseDTO;
import com.CloudBalance.Backend.model.User;
import com.CloudBalance.Backend.config.PasswordConfig;
import com.CloudBalance.Backend.repository.UserRepository;
import com.CloudBalance.Backend.security.AuthUtil;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final AuthUtil authUtil;
    private final UserRepository repo;
    private final PasswordConfig passwordConfig;

    public AuthService(AuthenticationManager authenticationManager, AuthUtil authUtil, UserRepository repo, PasswordConfig passwordConfig) {
        this.authenticationManager = authenticationManager;
        this.authUtil = authUtil;
        this.repo = repo;
        this.passwordConfig = passwordConfig;
    }

    public LoginResponseDTO login(LoginRequestDTO loginRequestDTO){
        Authentication authentication  = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequestDTO.getEmail(), loginRequestDTO.getPassword())

        );

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        User user  = repo.findByEmail(loginRequestDTO.getEmail()).orElseThrow(() -> new RuntimeException("User not Found"));

        String name = user.getFirstName() + " " + user.getLastName();
        String role = user.getRole();

        String token = authUtil.generateAccessToken(userDetails.getUsername(), role);

        return new LoginResponseDTO(token, name, role);
    }

    public SignupResponseDTO signup(SignupRequestDTO signupRequestDTO) {

        if (repo.findByEmail(signupRequestDTO.getEmail()).isPresent()) {
            throw new IllegalArgumentException("User already exists");
        }

        User user = new User();
        user.setEmail(signupRequestDTO.getEmail());
        user.setFirstName(signupRequestDTO.getFirstName());
        user.setLastName(signupRequestDTO.getLastName());
        user.setPassword(passwordConfig.passwordEncoder().encode(signupRequestDTO.getPassword()));
        user.setRole(signupRequestDTO.getRole());

        user = repo.save(user);

        return new SignupResponseDTO(
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getRole()
        );
    }

}
