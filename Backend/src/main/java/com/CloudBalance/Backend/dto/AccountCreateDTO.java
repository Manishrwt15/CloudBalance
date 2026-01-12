package com.CloudBalance.Backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
public class AccountCreateDTO {
    @NotBlank(message = "ARN is required")
    private String arn;

    @NotBlank(message = "AccountID is required")
    private String accountId;

    @NotBlank(message = "Account name is required")
    private String name;
}
