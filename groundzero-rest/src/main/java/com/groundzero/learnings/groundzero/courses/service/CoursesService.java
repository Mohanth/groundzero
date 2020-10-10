package com.groundzero.learnings.groundzero.courses.service;

import com.groundzero.learnings.groundzero.courses.CourseDetails;

public interface CoursesService {

    CourseDetails getCourseDetailsById(String CourseId);
    String saveCourseDetails(CourseDetails courseDetails);



}
