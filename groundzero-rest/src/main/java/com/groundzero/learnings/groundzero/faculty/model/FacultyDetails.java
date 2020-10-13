package com.groundzero.learnings.groundzero.faculty.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@Getter
@Setter
public class FacultyDetails {
    String facultyId;
    String facultyName;
    String facultyFirstName;
    String facultyLastName;
    String facultyEmail;
    String facultyPhone;
    String password;
    String preferredSubject;

    public FacultyDetails() {
    }
}
