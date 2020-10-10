package com.groundzero.learnings.groundzero.person.model;

import com.groundzero.learnings.groundzero.courses.CourseDetails;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Person {
    String personId;
    String personFName;
    String personLName;
    String personFullName;
    String personType;
    String empType;
    String isActive;
    String address;
    String pincode;
    String State;
    String Country;
    List<CourseDetails> listOfCourses;
    String terminationDt;
    String joiningDt;
    String email;
    String phone;
    String leadId;//who referred
    String referralCode;

}
