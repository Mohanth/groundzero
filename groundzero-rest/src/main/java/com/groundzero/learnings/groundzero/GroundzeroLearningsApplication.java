package com.groundzero.learnings.groundzero;

import com.groundzero.learnings.groundzero.user.repository.UserRepository;
import com.groundzero.learnings.groundzero.user.service.UserService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GroundzeroLearningsApplication {


    /*@Bean
    public UserRepository userRepository(){
        return new UserRepository();
    }*/

    public static void main(String[] args) {
        SpringApplication.run(GroundzeroLearningsApplication.class, args);
    }
}
