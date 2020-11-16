package com.groundzero.learnings.groundzero.user.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserCourses {
    String userId;
    String courseId;
    String purchaseDate;
    String courseValidity;
    String courseName;
}
