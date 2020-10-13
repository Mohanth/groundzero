package com.groundzero.learnings.groundzero.faculty.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.groundzero.learnings.groundzero.faculty.model.FacultyDetails;
import com.groundzero.learnings.groundzero.faculty.service.impl.FacultyServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/faculty")
public class FacultyController {

    @Autowired
    private FacultyServiceImpl facultyService;

    @GetMapping("/getfaculty/{id}")
    @ResponseBody
    public FacultyDetails getfacultyid(@PathVariable String id){return facultyService.getFacultyDetailsById(id);}

    @PostMapping("/savefaculty")
    public String savefaculty(@RequestBody String facultyDetailsStr) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        FacultyDetails facultyDetails = mapper.readValue(facultyDetailsStr,FacultyDetails.class);
        return facultyService.savefacultydetails(facultyDetails);
    }
}
