package com.groundzero.learnings.groundzero.user.service;


import com.groundzero.learnings.groundzero.user.model.UserDetailsResponse;

public interface UserService {

    UserDetailsResponse getUserDetailsResponse(String userId);
}
