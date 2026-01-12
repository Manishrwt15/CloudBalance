package com.CloudBalance.Backend.service;

import com.CloudBalance.Backend.exception.DuplicateResourceException;
import com.CloudBalance.Backend.exception.ResourceNotFoundException;
import com.CloudBalance.Backend.model.Account;
import com.CloudBalance.Backend.model.User;
import com.CloudBalance.Backend.repository.AccountRepository;
import com.CloudBalance.Backend.repository.UserRepository;
import jakarta.transaction.Transactional;

public class UserAccountServiceImpl implements UserAccountService {

    private final UserRepository userRepository;
    private final AccountRepository accountRepository;

    public UserAccountServiceImpl(UserRepository userRepository, AccountRepository accountRepository) {
        this.userRepository = userRepository;
        this.accountRepository = accountRepository;
    }

    @Override
    @Transactional
    public void assignAccountToUser(Long userId, String arn) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        Account account = accountRepository.findByArn(arn).orElseThrow(() -> new ResourceNotFoundException("Account not found with arn: " + arn));

        if (user.getAccounts().contains(account)) {
            throw new DuplicateResourceException("Account already assigned to user");
        }

        user.getAccounts().add(account);
        account.getUsers().add(user);
        userRepository.save(user);
    }

    @Override
    @Transactional
    public void removeAccountFromUser(Long userId, String arn) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

        Account account = accountRepository.findByArn(arn).orElseThrow(() -> new ResourceNotFoundException("Account not found with arn: " + arn));

        if (!user.getAccounts().contains(account)) {throw new ResourceNotFoundException("Account is not assigned to this user");}

        user.getAccounts().remove(account);
        account.getUsers().remove(user);
        userRepository.save(user);
    }
}
