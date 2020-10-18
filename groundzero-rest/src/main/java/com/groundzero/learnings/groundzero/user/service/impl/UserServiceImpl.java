package com.groundzero.learnings.groundzero.user.service.impl;

import com.groundzero.learnings.groundzero.exception.StudentNotFoundException;
import com.groundzero.learnings.groundzero.user.controller.UserController;
import com.groundzero.learnings.groundzero.user.model.UserCredits;
import com.groundzero.learnings.groundzero.user.model.UserDetails;
import com.groundzero.learnings.groundzero.user.model.UserOrder;
import com.groundzero.learnings.groundzero.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Repository;
import org.thymeleaf.context.IContext;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.templateresolver.SpringResourceTemplateResolver;


import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;

@Slf4j
@Repository
public class UserServiceImpl implements UserService {

    @Autowired
    private JdbcTemplate gzJdbcTemplate;


    @Autowired
    private SpringTemplateEngine templateEngine;


    @Autowired
    private JavaMailSender mailSender;




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

    public String saveUserDetails(UserDetails userDetails)  {

        String sql = "INSERT into user(  user_name , user_email ,user_phone , password ) VALUES(?,?,?,?)";
        gzJdbcTemplate.update(sql, userDetails.getUserFullName(), userDetails.getUserEmail(), userDetails.getUserPhone(),userDetails.getPassword());


        SimpleMailMessage simpleMailMessage=new SimpleMailMessage();
        Context context = new Context();
        String html = templateEngine.process("gmail",  context);

        simpleMailMessage.setFrom("n.srisai1234@gmail.com");
        simpleMailMessage.setTo(userDetails.getUserEmail());
        simpleMailMessage.setSubject("groundzerolearning");
        simpleMailMessage.setText(html);
        mailSender.send(simpleMailMessage);
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

