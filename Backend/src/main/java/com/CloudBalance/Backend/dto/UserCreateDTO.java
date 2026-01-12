package com.CloudBalance.Backend.dto;

import com.CloudBalance.Backend.model.Role;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserCreateDTO {
    @NotBlank(message = "FirstName is required")
    private String firstName;

    @NotBlank(message = "LastName is required")
    private String lastName;

    @Email
    private String email;

    @NotNull(message = "Role is required")
    private Role role;

    @NotBlank(message = "Password is required")
    private String password;

    private List<Long> accountIds;
}
