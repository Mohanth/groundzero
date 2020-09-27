package com.groundzero.learnings.groundzero.user.service;


import com.groundzero.learnings.groundzero.user.UserDetails;

public interface UserService {

    UserDetails getUserDetailsById(String userId);
    String saveuserdetails(UserDetails userDetails);
}
