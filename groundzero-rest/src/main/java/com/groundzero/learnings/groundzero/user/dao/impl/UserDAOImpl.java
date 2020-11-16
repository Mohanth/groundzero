package com.groundzero.learnings.groundzero.user.dao.impl;

import com.groundzero.learnings.groundzero.exception.StudentNotFoundException;
import com.groundzero.learnings.groundzero.user.dao.UserDAO;
import com.groundzero.learnings.groundzero.user.model.UserCourses;
import com.groundzero.learnings.groundzero.user.model.UserCredits;
import com.groundzero.learnings.groundzero.user.model.UserDetails;
import com.groundzero.learnings.groundzero.user.model.UserOrder;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.User;
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

import static org.springframework.jdbc.core.BeanPropertyRowMapper.*;

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
            String sql = "select user_id as userID,user_name as userFullName,user_firstname as userFirstName,user_lastname as userLastName,user_email as userEmail,user_phone as userPhone from user where user_id = ?";
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
        String sql = "SELECT * FROM user_orders WHERE user_id = ?";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("userId", userid);
        List<UserOrder> userOrder = gzJdbcTemplate.query(sql, new Object[]{userid}, newInstance(UserOrder.class));
        return userOrder;
    }

    @Override
    public UserCredits getUserCredits(String userid) {
        String sql = "SELECT * FROM user_credits WHERE user_id = ?";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("userId", userid);
        UserCredits userCredits = gzJdbcTemplate.queryForObject(sql, new Object[]{userid},
                newInstance(UserCredits.class));
        return userCredits;

    }


    @Override
    public String updateUserCredits(UserCredits userCredits) {
        String sql = "UPDATE user_credits SET coins_available=? WHERE user_id=?";
        gzJdbcTemplate.update(sql, userCredits.getCoinsAvailable());
        return "successfully updated";
    }

    @Override
    public String saveUserCourses(UserOrder userOrder) {
        String sql = "INSERT into user_orders(user_id, course_id , order_amount,course_name) VALUES (? ,? ,?)";
        gzJdbcTemplate.update(sql, userOrder.getUserId(), userOrder.getCourseId(), userOrder.getOrderAmount(), userOrder.getCourseName());
        return "hii";
    }

    @Override
    public List<UserCourses> getUserCoursesById(String userId) {
        String sql = "select user_id as userId,course_id as courseId,purchase_date as purchaseDate,course_validity as courseValidity,coursename from user_courses where user_id = ?";
        List<UserCourses> userCourses = gzJdbcTemplate.query(sql, new String[]{userId}, newInstance(UserCourses.class));
        return userCourses;
    }

    public String loginauthentication(UserDetails userDetails) {
        String sql = "SELECT user_id  from user where user_email = ? and password = ?";
        String userId = gzJdbcTemplate.queryForObject(sql, new String[]{userDetails.getUserEmail(), userDetails.getPassword()}, String.class);
        return userId;
    }
}