package com.CloudBalance.Backend.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Repository
@RequiredArgsConstructor
public class CostRepository {
    private final JdbcTemplate jdbcTemplate;

    public List<Map<String, Object>> fetchMonthlyCost(String startDate, String endDate, String groupBy, Map<String, List<String>> filters,  String accountId) {
        StringBuilder sql = new StringBuilder("""
            SELECT 
                TO_VARCHAR(DATE_TRUNC('MONTH', BILL_DATE), 'YYYY-MM') AS MONTH,
                %s AS GROUP_KEY,
                SUM(COST) AS TOTAL_COST
            FROM COST_REPORT
            WHERE BILL_DATE BETWEEN ? AND ?
        """.formatted(groupBy));

        List<Object> params = new ArrayList<>();
        params.add(startDate);
        params.add(endDate);

        if (accountId != null && !accountId.isEmpty()) {
            sql.append(" AND ACCOUNT_ID = ? ");
            params.add(accountId);
        }

        if (filters != null && !filters.isEmpty()) {
            filters.forEach((column, values) -> {
                if (values != null && !values.isEmpty()) {
                    sql.append(" AND ").append(column).append(" IN (");
                    sql.append(values.stream().map(v -> "?").collect(Collectors.joining(",")));
                    sql.append(") ");
                    params.addAll(values);
                }
            });
        }

        sql.append(" GROUP BY MONTH, ").append(groupBy).append(" ORDER BY MONTH");

        return jdbcTemplate.queryForList(sql.toString(), params.toArray());
    }

}