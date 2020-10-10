package com.groundzero.learnings.groundzero.faculty.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.groundzero.learnings.groundzero.faculty.FacultyDetails;
import com.groundzero.learnings.groundzero.faculty.service.impl.FacultyServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/faculty")
public class FacultyController {

    private FacultyServiceImpl facultyService = new FacultyServiceImpl();

    @GetMapping("/getfaculty/{id}")
    public FacultyDetails getfacultyid(@PathVariable String id){return facultyService.getFacultyDetailsById(id);}

    @PostMapping("/savefaculty")
    @CrossOrigin(origins="http://localhost:3000")
    public String saveuser(@RequestBody String facultyDetailsStr) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        FacultyDetails facultyDetails = mapper.readValue(facultyDetailsStr,FacultyDetails.class);
        return facultyService.savefacultydetails(facultyDetails);
    }
}
