package com.groundzero.learnings.groundzero.user.dao.impl;

import com.groundzero.learnings.groundzero.exception.StudentNotFoundException;
import com.groundzero.learnings.groundzero.user.dao.UserDAO;
import com.groundzero.learnings.groundzero.user.model.UserCredits;
import com.groundzero.learnings.groundzero.user.model.UserDetails;
import com.groundzero.learnings.groundzero.user.model.UserOrder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Repository;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring5.SpringTemplateEngine;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Repository
public class UserDAOImpl implements UserDAO {
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

    public String saveUserDetails(UserDetails userDetails) throws MessagingException {

        String sql = "INSERT into user(  user_name , user_email ,user_phone , password ) VALUES(?,?,?,?)";
        gzJdbcTemplate.update(sql, userDetails.getUserFullName(), userDetails.getUserEmail(), userDetails.getUserPhone(), userDetails.getPassword());

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, false, "utf-8");
        Map<String, Object> model = new HashMap<String, Object>();
        model.put("name", userDetails.getUserFullName());
        model.put("email", userDetails.getUserEmail());
        model.put("password", userDetails.getPassword());
        Context context = new Context();
        context.setVariables(model);
        String html = templateEngine.process("gmail", context);
        helper.setFrom("n.srisai1234@gmail.com");
        helper.setTo(userDetails.getUserEmail());
        helper.setSubject("groundzerolearning");
        helper.setText(html, true);
        mailSender.send(message);
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
