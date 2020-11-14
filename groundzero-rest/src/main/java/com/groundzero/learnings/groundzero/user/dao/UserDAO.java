package com.groundzero.learnings.groundzero.user.dao;


import com.groundzero.learnings.groundzero.user.model.UserCredits;
import com.groundzero.learnings.groundzero.user.model.UserDetails;
import com.groundzero.learnings.groundzero.user.model.UserOrder;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

public interface UserDAO {
    UserDetails getUserDetailsById(String  userId);
    String saveUserDetails(UserDetails userDetails) throws MessagingException, IOException;
    List<UserOrder> getUserOrders(String userId);

    UserCredits getUserCredits(String id);
    String loginauthentication(UserDetails userDetails) ;
    String updateUserCredits(UserCredits userCredits);


    String saveUserCourses(UserOrder userOrder);
}
