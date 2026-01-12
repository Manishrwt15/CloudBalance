package com.CloudBalance.Backend.service;

public interface UserAccountService {
    void assignAccountToUser(Long userId, String arn);
    void removeAccountFromUser(Long userId, String arn);
}
