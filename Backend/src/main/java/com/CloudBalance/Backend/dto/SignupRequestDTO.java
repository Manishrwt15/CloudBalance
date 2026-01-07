package com.CloudBalance.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignupRequestDTO {
    private  String firstName;
    private  String lastName;
    private  String email;
    @NonNull
    private  String password;
    private  String role;
}
