package com.groundzero.learnings.groundzero.user.controller;

import com.groundzero.learnings.groundzero.user.Entity.UserEntity;
import com.groundzero.learnings.groundzero.user.UserDetails;
import com.groundzero.learnings.groundzero.user.repository.UserRepository;
import com.groundzero.learnings.groundzero.user.service.UserService;
import com.groundzero.learnings.groundzero.user.service.impl.UserServiceImpl;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;


    private UserService userService;



    @GetMapping("/getUser/{id}")
    @ResponseBody
    public String getUserId(String userId) {
        return userService.getUserDetailsById(userId);
    }

   /* @PostMapping("/saveUser")
    public String saveUser(@RequestBody UserDetails userDetails) { return ""; }
*/

    @PostMapping("/saveUser")
    public @ResponseBody  String saveUser(@RequestParam String userId , @RequestParam String userFirstName , @RequestParam String userFullName , @RequestParam String userLastName
  , @RequestParam String userEmail , @RequestParam String userPhone , @RequestParam String createdDate , @RequestParam String isActive )
    {
        UserEntity n = new UserEntity();
        n.setUserId(userId);
        n.setUserFullName(userFirstName);
        userRepository.save(n);
        return "Saved";

    }

   /* @PostMapping("/saveuser")
    private int saveuser(@RequestBody UserEntity userentity)
    {
        userService.save(userentity);

    }*/
}
