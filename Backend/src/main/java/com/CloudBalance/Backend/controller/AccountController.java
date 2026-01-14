package com.CloudBalance.Backend.controller;

import com.CloudBalance.Backend.dto.AccountCreateDTO;
import com.CloudBalance.Backend.dto.AccountResponseDTO;
import com.CloudBalance.Backend.service.AccountService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dashboard")
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/accounts")
    public ResponseEntity<List<AccountResponseDTO>> getAllAccounts() {
        List<AccountResponseDTO> accounts = accountService.getAllAccounts();
        return ResponseEntity.ok(accounts);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/onboarding")
    public ResponseEntity<AccountResponseDTO> create(@Valid @RequestBody AccountCreateDTO dto) {
        AccountResponseDTO created = accountService.createAccount(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(created);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/accounts/{id}")
    public ResponseEntity<AccountResponseDTO> getAccountById(@PathVariable Long id) {
        AccountResponseDTO account = accountService.getAccountById(id);
        return ResponseEntity.ok(account);
    }

    @PreAuthorize("hasRole('CUSTOMER')")
    @GetMapping("/customer/accounts")
    public ResponseEntity<List<AccountResponseDTO>> getCustomerAccounts(Authentication authentication) {
        String email = authentication.getName();
        List<AccountResponseDTO> accounts = accountService.getAccountsByCustomerEmail(email);
        return ResponseEntity.ok(accounts);
    }

}
