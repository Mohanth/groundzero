package com.groundzero.learnings.groundzero;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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
