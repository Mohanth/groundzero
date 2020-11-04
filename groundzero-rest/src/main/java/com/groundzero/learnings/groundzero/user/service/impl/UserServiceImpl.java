package com.groundzero.learnings.groundzero.user.service.impl;

import com.groundzero.learnings.groundzero.user.dao.UserDAO;
import com.groundzero.learnings.groundzero.user.model.UserDetailsResponse;
import com.groundzero.learnings.groundzero.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserServiceImpl implements UserService {

    private final UserDAO userDAO;

    @Autowired
    public UserServiceImpl(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public UserDetailsResponse getUserDetailsResponse(String userId) {
        UserDetailsResponse detailsResponse = new UserDetailsResponse();
        detailsResponse.setUserCredits(userDAO.getUserCredits(userId));
        detailsResponse.setUserDetails(userDAO.getUserDetailsById(userId));
        detailsResponse.setUserOrder(userDAO.getUserOrders(userId));

        return detailsResponse;
    }
}

