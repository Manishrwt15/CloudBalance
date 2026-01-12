package com.CloudBalance.Backend.dto;

import com.CloudBalance.Backend.model.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignupRequestDTO {

    @NotBlank(message = "FirstName is required")
    private  String firstName;

    @NotBlank(message = "LastName is required")
    private  String lastName;

    @Email
    private  String email;

    @NotBlank(message = "Password is required")
    private  String password;

    @NotNull
    private Role role;
}
