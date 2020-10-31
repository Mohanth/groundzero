package com.groundzero.learnings.groundzero.courses.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.groundzero.learnings.groundzero.courses.CourseDetails;
import com.groundzero.learnings.groundzero.courses.service.impl.CoursesServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/courses")
public class CoursesController {

    private CoursesServiceImpl coursesService = new CoursesServiceImpl();

    @GetMapping("/getcourse/{id}")
    @ResponseBody
    public CourseDetails getUserId(@PathVariable String id) {
        return coursesService.getCourseDetailsById(id);
    }
    @PostMapping("/savecourse")
    public String savecourse(@RequestBody String courseDetailsStr) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        CourseDetails courseDetails = mapper.readValue(courseDetailsStr,CourseDetails.class);
        return coursesService.saveCourseDetails(courseDetails);
    }

}
