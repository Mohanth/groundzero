package com.groundzero.learnings.groundzero.user.service.impl;

import com.groundzero.learnings.groundzero.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

public class UserServiceImpl implements UserService {

    @Autowired
    public JdbcTemplate jdbcTemplate;

    @Override
    public String getUserDetailsById(String userId) {
        return null;
    }
}
