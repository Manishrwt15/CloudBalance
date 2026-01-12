package com.CloudBalance.Backend.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@Configuration
public class SnowflakeConfig {

    @Bean(name = "snowflakeDataSource")
    public DataSource snowflakeDataSource(
            @Value("${spring.datasource.snowflake.url}") String url,
            @Value("${spring.datasource.snowflake.username}") String username,
            @Value("${spring.datasource.snowflake.password}") String password,
            @Value("${spring.datasource.snowflake.warehouse}") String warehouse,
            @Value("${spring.datasource.snowflake.database}") String database,
            @Value("${spring.datasource.snowflake.schema}") String schema
    ) {
        DriverManagerDataSource ds = new DriverManagerDataSource();
        ds.setDriverClassName("net.snowflake.client.jdbc.SnowflakeDriver");
        ds.setUrl(url + "?warehouse=" + warehouse + "&db=" + database + "&schema=" + schema + "&useArrowResultSet=false");
        ds.setUsername(username);
        ds.setPassword(password);

        return ds;
    }

    @Bean(name = "snowflakeJdbcTemplate")
    public JdbcTemplate snowflakeJdbcTemplate(
            @Qualifier("snowflakeDataSource") DataSource ds) {
        return new JdbcTemplate(ds);
    }
}
