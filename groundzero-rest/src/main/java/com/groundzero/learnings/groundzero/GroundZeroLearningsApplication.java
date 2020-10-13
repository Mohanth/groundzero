package com.groundzero.learnings.groundzero;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin("*")
public class GroundZeroLearningsApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(GroundZeroLearningsApplication.class, args);
    }
}
