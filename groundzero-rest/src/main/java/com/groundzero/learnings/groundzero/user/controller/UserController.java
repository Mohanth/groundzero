package com.groundzero.learnings.groundzero.user.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.groundzero.learnings.groundzero.user.model.UserCredits;
import com.groundzero.learnings.groundzero.user.model.UserDetails;
import com.groundzero.learnings.groundzero.user.model.UserDetailsResponse;
import com.groundzero.learnings.groundzero.user.model.UserOrder;
import com.groundzero.learnings.groundzero.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.thymeleaf.util.StringUtils;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/getUser/{id}")
    @ResponseBody
    public UserDetails getUserId(@PathVariable String id) {
        return userService.getUserDetailsById(id);
    }


    @PostMapping("/saveUser")
    public String saveUser(@RequestBody String userDetailsStr) throws IOException, MessagingException {
        ObjectMapper mapper = new ObjectMapper();
        UserDetails userDetails = mapper.readValue(userDetailsStr, UserDetails.class);

        return userService.saveUserDetails(userDetails);
    }

    @PostMapping("/login")
    public String login(@RequestBody String userDetailsStr) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        UserDetails userDetails = mapper.readValue(userDetailsStr, UserDetails.class);

        return userService.loginauthentication(userDetails);
    }


    @GetMapping("/getusercredits/{id}")
    @ResponseBody
    public UserCredits getUserCredits(@PathVariable String id) {
        return userService.getUserCredits(id);
    }

    @PostMapping("updatecredits")
    public String updateCredits(@RequestBody String userCreditsStr) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        UserCredits userCredits = mapper.readValue(userCreditsStr, UserCredits.class);
        return userService.updateUserCredits(userCredits);
    }

    @PostMapping("/saveUserCourses")
    public String saveUserCourses(@RequestBody String userOrderStr) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        UserOrder userOrder = mapper.readValue(userOrderStr, UserOrder.class);
        return userService.saveUserCourses(userOrder);
    }

    @GetMapping("/getorders/{id}")
    @ResponseBody
    public List<UserOrder> getuserorder(@PathVariable String id) {
        return userService.getUserOrders(id);
    }

    @GetMapping("/getuserdetails/{id}")
    @ResponseBody
    public UserDetailsResponse getUserDetails(@PathVariable String id) {
        UserDetailsResponse userDetailsResponse = new UserDetailsResponse();
        if (!StringUtils.isEmpty(id)) {
            userDetailsResponse = userService.getUserDetailsResponse(id);
        }
        return userDetailsResponse;
    }

}
