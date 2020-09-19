package com.groundzero.learnings.groundzero.user.controller;

import com.groundzero.learnings.groundzero.user.UserDetails;
import com.groundzero.learnings.groundzero.user.service.UserService;
import com.groundzero.learnings.groundzero.user.service.impl.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        userService = new UserServiceImpl();
    }

    @GetMapping("/getUser/{id}")
    @ResponseBody
    public String getUserId(String userId) {
        return userService.getUserDetailsById(userId);
    }

    @PostMapping("/saveUser")
    public String saveUser(@RequestBody UserDetails userDetails) {
        return "";
    }
}
