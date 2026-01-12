package com.CloudBalance.Backend.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class CostRepository {

    @Autowired
    @Qualifier("snowflakeJdbcTemplate")
    private JdbcTemplate jdbcTemplate;

    public List<Map<String, Object>> getServiceMonthlyCost() {

        jdbcTemplate.execute("USE WAREHOUSE CLOUDBALANCE_WH");
        jdbcTemplate.execute("USE DATABASE CLOUDBALANCE_DB");
        jdbcTemplate.execute("USE SCHEMA COST");


        String sql = """
            SELECT
              SERVICE,
              TO_VARCHAR(USAGE_DATE, 'YYYY-MM') AS MONTH,
              SUM(COST) AS TOTAL_COST
            FROM CLOUDBALANCE_DB.COST.AWS_COSTS
            WHERE USAGE_DATE >= DATEADD(MONTH, -6, CURRENT_DATE)
            GROUP BY SERVICE, MONTH
            ORDER BY SERVICE, MONTH
        """;

        return jdbcTemplate.queryForList(sql);
    }
}
