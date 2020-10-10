package com.groundzero.learnings.groundzero.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

import javax.sql.DataSource;

@Configuration
public class SpringConfiguration {
    @Autowired
    private Environment env;

    @Bean
    @Primary
    public DataSource gzDataSource() throws ClassNotFoundException {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        Class.forName("com.mysql.jdbc.Driver");
        dataSource.setUrl(env.getProperty("spring.datasource.url"));
        dataSource.setUsername(env.getProperty("spring.datasource.username"));
        dataSource.setPassword(env.getProperty("spring.datasource.password"));
        return dataSource;
    }

    @Bean
    public JdbcTemplate gzJdbcTemplate(@Qualifier("gzDataSource") DataSource ds) {
        return new JdbcTemplate(ds);
    }

}