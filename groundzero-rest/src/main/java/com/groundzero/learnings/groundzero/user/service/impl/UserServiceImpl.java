package com.groundzero.learnings.groundzero.user.service.impl;

import com.groundzero.learnings.groundzero.user.UserDetails;
import com.groundzero.learnings.groundzero.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
@Transactional
@Configuration
public class UserServiceImpl implements UserService {

    @Override

    public UserDetails getUserDetailsById(String userid) {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://groundzero-db.cqqbhji3hylj.us-east-1.rds.amazonaws.com/groundzero_db");
        dataSource.setUsername("admin");
        dataSource.setPassword("groundzero");
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);


        String sql = "SELECT user_id as userId,user_firstname as userFirstName ,user_lastname as userLastName , user_name as userFullName , user_email as userEmail FROM user WHERE user_id = ?";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("userId",userid);
        UserDetails userdetail = jdbcTemplate.queryForObject(sql,new Object[]{userid},
                BeanPropertyRowMapper.newInstance(UserDetails.class));
        return userdetail;

    }
    public String saveuserdetails(UserDetails userDetails){
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://groundzero-db.cqqbhji3hylj.us-east-1.rds.amazonaws.com/groundzero_db");
        dataSource.setUsername("admin");
        dataSource.setPassword("groundzero");
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);

        String sql="INSERT into user(user_id , user_name , user_firstname , user_lastname , user_email , user_phone ) VALUES(?,?,?,?,?,?)";
        jdbcTemplate.update(sql,userDetails.getUserId(), userDetails.getUserFullName(),userDetails.getUserFirstName() ,userDetails.getUserLastName() ,userDetails.getUserEmail() , userDetails.getUserPhone());

        return "successfully saved";
    }
}
