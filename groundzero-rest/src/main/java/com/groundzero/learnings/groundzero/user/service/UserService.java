package com.groundzero.learnings.groundzero.user.service;


import com.groundzero.learnings.groundzero.user.model.UserCredits;
import com.groundzero.learnings.groundzero.user.model.UserDetails;
import com.groundzero.learnings.groundzero.user.model.UserDetailsResponse;
import com.groundzero.learnings.groundzero.user.model.UserOrder;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

public interface UserService {

    UserDetailsResponse getUserDetailsResponse(String userId);


    UserDetails getUserDetailsById(String userId);

    String saveUserDetails(UserDetails userDetails) throws MessagingException, IOException;

    List<UserOrder> getUserOrders(String userId);

    UserCredits getUserCredits(String id);

    String updateUserCredits(UserCredits userCredits);


    UserDetailsResponse loginauthentication(UserDetails userDetails);
}
