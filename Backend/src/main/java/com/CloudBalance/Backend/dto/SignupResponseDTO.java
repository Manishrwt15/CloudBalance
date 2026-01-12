package com.CloudBalance.Backend.dto;

import com.CloudBalance.Backend.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignupResponseDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String role;
}
