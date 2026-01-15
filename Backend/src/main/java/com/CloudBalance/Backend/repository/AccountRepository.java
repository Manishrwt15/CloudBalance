package com.CloudBalance.Backend.repository;

import com.CloudBalance.Backend.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AccountRepository extends JpaRepository<Account,Long> {

    boolean existsByAccountId(String accountId);

    boolean existsByArn(String arn);
}
