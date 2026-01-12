package com.CloudBalance.Backend.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserResponseDTO {
    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String role;

    private List<Long> accountIds;
}
