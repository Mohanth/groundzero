package com.groundzero.learnings.groundzero.user.service.impl;

import com.groundzero.learnings.groundzero.helper.SendMailHelper;
import com.groundzero.learnings.groundzero.user.dao.UserDAO;
import com.groundzero.learnings.groundzero.user.model.UserCredits;
import com.groundzero.learnings.groundzero.user.model.UserDetails;
import com.groundzero.learnings.groundzero.user.model.UserDetailsResponse;
import com.groundzero.learnings.groundzero.user.model.UserOrder;
import com.groundzero.learnings.groundzero.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    private final UserDAO userDAO;

    private SendMailHelper sendMailHelper = new SendMailHelper();

    @Value("${groundzero.email.from}")
    private String fromAddress;

    @Value("${groundzero.email.newuser.subject}")
    private String newUserSubject;

    @Autowired
    public UserServiceImpl(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public UserDetailsResponse getUserDetailsResponse(String userId) {
        UserDetailsResponse detailsResponse = new UserDetailsResponse();
        detailsResponse.setUserCredits(userDAO.getUserCredits(userId));
        detailsResponse.setUserDetails(this.getUserDetailsById(userId));
        detailsResponse.setUserOrder(userDAO.getUserOrders(userId));

        return detailsResponse;
    }

    @Override
    public UserDetails getUserDetailsById(String userId) {
        if (userId != null) {
            UserDetails userDetails = new UserDetails();
            userDetails = userDAO.getUserDetailsById(userId);
            userDetails.setUserCourses(userDAO.getUserCoursesById(userId));
            return userDetails;
        } else {
            return null;
        }
    }

    @Override
    public String saveUserDetails(UserDetails userDetails) throws IOException {
        if (userDetails != null) {
            userDAO.saveUserDetails(userDetails);

            Map<String, Object> model = new HashMap<>();
            model.put("name", userDetails.getUserFullName());
            model.put("email", userDetails.getUserEmail());
            model.put("password", userDetails.getPassword());
            try {
                sendMailHelper.sendMail(fromAddress, userDetails.getUserEmail(), newUserSubject, model, "gmail");
            } catch (Exception e) {
                log.error("Unable to send emails" + e);
            }
            return "User Details Saved Successfully";
        }
        return "User Details are empty";
    }

    @Override
    public List<UserOrder> getUserOrders(String userId) {
        if (!StringUtils.isEmpty(userId)) {
            return userDAO.getUserOrders(userId);
        }
        return null;
    }

    @Override
    public UserCredits getUserCredits(String id) {
        if (id != null) {
            return userDAO.getUserCredits(id);
        }
        return null;
    }

    @Override
    public String updateUserCredits(UserCredits userCredits) {
        return null;
    }


    @Override
    public String loginauthentication(UserDetails userDetails) {
        String userId = userDAO.loginauthentication(userDetails);
        return userId;
    }

    @Override
    public String saveUserCourses(UserOrder userOrder) {
        return userDAO.saveUserCourses(userOrder);
    }
}

