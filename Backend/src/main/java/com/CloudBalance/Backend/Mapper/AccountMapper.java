package com.CloudBalance.Backend.Mapper;


import com.CloudBalance.Backend.dto.AccountCreateDTO;
import com.CloudBalance.Backend.dto.AccountResponseDTO;
import com.CloudBalance.Backend.model.Account;

public class AccountMapper {

    public static Account toEntity(AccountCreateDTO dto){
        Account account = new Account();
        account.setAccountId(dto.getAccountId());
        account.setArn(dto.getArn());
        account.setName(dto.getName());

        return account;
    }

    public static AccountResponseDTO toResponseDTO(Account entity){
        AccountResponseDTO accountResponseDTO = new AccountResponseDTO();
        accountResponseDTO.setId(entity.getId());
        accountResponseDTO.setArn(entity.getArn());
        accountResponseDTO.setName(entity.getName());
        accountResponseDTO.setAccountId(entity.getAccountId());

        return accountResponseDTO;
    }
}
