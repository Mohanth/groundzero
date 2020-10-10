package com.groundzero.learnings.groundzero.user.service.impl;

import com.groundzero.learnings.groundzero.exception.StudentNotFoundException;
import com.groundzero.learnings.groundzero.user.model.UserCredits;
import com.groundzero.learnings.groundzero.user.model.UserDetails;
import com.groundzero.learnings.groundzero.user.model.UserOrder;
import com.groundzero.learnings.groundzero.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Repository
public class UserServiceImpl implements UserService {

    @Autowired
    private JdbcTemplate gzJdbcTemplate;

    @Override
    public UserDetails getUserDetailsById(String userId) {
        UserDetails userDetails = null;
        try {
            String sql = "SELECT user_id as userId,user_firstname as userFirstName ,user_lastname as userLastName , user_name as userFullName , user_email as userEmail FROM user WHERE user_id = ?";
            Map<String, Object> paramMap = new HashMap<>();
            paramMap.put("userId", userId);
            userDetails = gzJdbcTemplate.queryForObject(sql, new Object[]{userId},
                    BeanPropertyRowMapper.newInstance(UserDetails.class));
        } catch (Exception e) {
            log.error("Error:" + e);
            throw new StudentNotFoundException();
        }
        return userDetails;
    }

    public String saveUserDetails(UserDetails userDetails) {
        String sql = "INSERT into user( user_id , user_name , user_firstname , user_lastname , user_email ,user_phone ) VALUES(?,?,?,?,?,?)";
        gzJdbcTemplate.update(sql, userDetails.getUserId(), userDetails.getUserFullName(), userDetails.getUserFirstName(), userDetails.getUserLastName(), userDetails.getUserEmail(), userDetails.getUserPhone());

        return "successfully saved";
    }

    @Override
    public List<UserOrder> getUserOrders(String userid) {
        String sql = "SELECT order_id FROM user_orders WHERE user_id = ?";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("userId", userid);

        List<UserOrder> userOrder = gzJdbcTemplate.query(sql, new Object[]{userid}, BeanPropertyRowMapper.newInstance(UserOrder.class));
        return userOrder;


    }

    @Override
    public UserCredits getUserCredits(String userid) {
        String sql = "SELECT * FROM user_credits WHERE user_id = ?";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("userId", userid);
        UserCredits userCredits = gzJdbcTemplate.queryForObject(sql, new Object[]{userid},
                BeanPropertyRowMapper.newInstance(UserCredits.class));
        return userCredits;

    }

    @Override
    public String updateUserCredits(UserCredits userCredits) {
        String sql = "UPDATE user_credits SET coins_available=? WHERE user_id=?";
        gzJdbcTemplate.update(sql, userCredits.getCoinsAvailable());
        return "successfully updated";
    }
}

