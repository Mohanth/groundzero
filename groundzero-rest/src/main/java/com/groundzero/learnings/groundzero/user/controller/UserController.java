package com.groundzero.learnings.groundzero.user.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.groundzero.learnings.groundzero.user.dao.impl.UserDAOImpl;
import com.groundzero.learnings.groundzero.user.model.UserCredits;
import com.groundzero.learnings.groundzero.user.model.UserDetails;
import com.groundzero.learnings.groundzero.user.model.UserOrder;
import com.groundzero.learnings.groundzero.user.service.UserService;
import com.groundzero.learnings.groundzero.user.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;
    

    @GetMapping("/getUser/{id}")
    @ResponseBody
    public UserDetails getUserId(@PathVariable String id) {
        return userService.getUserDetailsById(id);
    }


    @PostMapping("/saveUser")
    @CrossOrigin("*")
    public String saveuser(@RequestBody String userDetailsStr) throws IOException, MessagingException {
        ObjectMapper mapper = new ObjectMapper();
        UserDetails userDetails = mapper.readValue(userDetailsStr,UserDetails.class);

        return userService.saveUserDetails(userDetails);
    }

    @PostMapping("/login")
    @CrossOrigin("*")
    public String Login (@RequestBody String userDetailsStr) throws JsonProcessingException{
        ObjectMapper mapper = new ObjectMapper();
        UserDetails userDetails = mapper.readValue(userDetailsStr,UserDetails.class);

        return userService.loginauthentication(userDetails);
    }



    @GetMapping("/getorders/{id}")
    @ResponseBody
    public List<UserOrder> getuserorder(@PathVariable String id){
        return  userService.getUserOrders(id);
    }
    @GetMapping("/getusercredits/{id}")
    @ResponseBody
    public UserCredits getusercredits(@PathVariable String id){
        return userService.getUserCredits(id);
    }
    @PostMapping("updatecredits")
    public String updatecredits(@RequestBody String userCreditsStr) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        UserCredits userCredits = mapper.readValue(userCreditsStr,UserCredits.class);
        return userService.updateUserCredits(userCredits);
    }

}
