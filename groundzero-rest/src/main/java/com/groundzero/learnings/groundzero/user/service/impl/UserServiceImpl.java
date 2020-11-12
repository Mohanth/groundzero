package com.groundzero.learnings.groundzero.user.service.impl;

import com.groundzero.learnings.groundzero.user.dao.UserDAO;
import com.groundzero.learnings.groundzero.user.model.UserCredits;
import com.groundzero.learnings.groundzero.user.model.UserDetails;
import com.groundzero.learnings.groundzero.user.model.UserDetailsResponse;
import com.groundzero.learnings.groundzero.user.model.UserOrder;
import com.groundzero.learnings.groundzero.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    private final UserDAO userDAO;

    @Autowired
    public UserServiceImpl(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public UserDetailsResponse getUserDetailsResponse(String   userId) {
        UserDetailsResponse detailsResponse = new UserDetailsResponse();
        detailsResponse.setUserCredits(userDAO.getUserCredits(userId));
        detailsResponse.setUserDetails(userDAO.getUserDetailsById(userId));
        detailsResponse.setUserOrder(userDAO.getUserOrders(userId));

        return detailsResponse;
    }

    @Override
    public UserDetails getUserDetailsById(String userId) {
        if (userId != null) {
            return userDAO.getUserDetailsById(userId);
        }
        else{
            return null;
        }
    }

    @Override
    public String saveUserDetails(UserDetails userDetails) throws MessagingException, IOException {
        if (userDetails != null) {
            return userDAO.saveUserDetails(userDetails);
        }
        return "User Details are empty";
    }

    @Override
    public List<UserOrder> getUserOrders(String  userId) {
        if (!StringUtils.isEmpty(userId)) {
            return userDAO.getUserOrders(userId);
        }
        return null;
    }

    @Override
    public UserCredits getUserCredits(String id) {
        if(id != null){
            return userDAO.getUserCredits(id);
        }
        return null;
    }

    @Override
    public String updateUserCredits(UserCredits userCredits) {
        return null;
    }



    @Override
    public UserDetailsResponse loginauthentication(UserDetails userDetails) {
        String  userId = userDAO.loginauthentication(userDetails);
        UserDetailsResponse response = new UserDetailsResponse();
        response.setUserDetails(userDAO.getUserDetailsById(userId));
        response.setUserCredits(userDAO.getUserCredits(userId));
        response.setUserOrder(userDAO.getUserOrders(userId));
        return response;
    }
}

