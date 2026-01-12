package com.CloudBalance.Backend.service;

import com.CloudBalance.Backend.dto.AccountCreateDTO;
import com.CloudBalance.Backend.dto.AccountResponseDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AccountService {
    AccountResponseDTO createAccount(AccountCreateDTO account);
    AccountResponseDTO getAccountById(Long id);

    List<AccountResponseDTO> getAllAccounts();
}
