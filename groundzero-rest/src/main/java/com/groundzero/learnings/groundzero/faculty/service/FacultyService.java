package com.groundzero.learnings.groundzero.faculty.service;

import com.groundzero.learnings.groundzero.faculty.FacultyDetails;

public interface FacultyService {


    FacultyDetails getFacultyDetailsById(String facultyid);
    String savefacultydetails(FacultyDetails facultyDetails);

}
