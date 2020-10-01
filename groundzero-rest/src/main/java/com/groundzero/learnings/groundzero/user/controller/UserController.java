package com.groundzero.learnings.groundzero.user.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.groundzero.learnings.groundzero.user.UserCredits;
import com.groundzero.learnings.groundzero.user.UserDetails;
import com.groundzero.learnings.groundzero.user.UserOrder;
import com.groundzero.learnings.groundzero.user.service.UserService;
import com.groundzero.learnings.groundzero.user.service.impl.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private UserServiceImpl userService = new UserServiceImpl();

    @GetMapping("/getUser/{id}")
    @ResponseBody
    public UserDetails getUserId(@PathVariable String id) {
        return userService.getUserDetailsById(id);
    }

    @PostMapping("/saveUser")
    public String saveuser(@RequestBody String userDetailsStr) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        UserDetails userDetails = mapper.readValue(userDetailsStr,UserDetails.class);
        return userService.saveuserdetails(userDetails);
    }
    @GetMapping("/getorders/{id}")
    @ResponseBody
    public List<UserOrder> getuserorder(@PathVariable String id){
        return  userService.getuserorders(id);
    }
    @GetMapping("/getusercredits/{id}")
    @ResponseBody
    public UserCredits getusercredits(@PathVariable String id){
        return userService.getusercredits(id);
    }
    @PostMapping("updatecredits/{id}")
    public String updatecredits(@RequestBody String userCreditsStr) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        UserCredits userCredits = mapper.readValue(userCreditsStr,UserCredits.class);
        return userService.updateusercredits(userCredits);
    }
}
