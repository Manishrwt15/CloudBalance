package com.CloudBalance.Backend.dto;

import com.CloudBalance.Backend.model.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponseDTO {
    String jwt;
    String name;
    String role;
}
