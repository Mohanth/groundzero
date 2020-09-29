package com.groundzero.learnings.groundzero.user.service;


import com.groundzero.learnings.groundzero.user.UserCredits;
import com.groundzero.learnings.groundzero.user.UserDetails;
import com.groundzero.learnings.groundzero.user.UserOrder;

import java.util.List;

public interface UserService {

    UserDetails getUserDetailsById(String userId);
    String saveuserdetails(UserDetails userDetails);
    List<UserOrder> getuserorders(String userId);

    UserCredits getusercredits(String id);

    String updateusercredits(UserCredits userCredits);
}
