package com.groundzero.learnings.groundzero.courses;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class CourseDetails {
    String courseId;
    String courseName;
    String coursePrice;
    String courseInstructor;
    String courseCreatedDate;

    public CourseDetails(){

    }

    //getters and setters
    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getCoursePrice() {
        return coursePrice;
    }

    public void setCoursePrice(String coursePrice) {
        this.coursePrice = coursePrice;
    }

    public String getcourseInstructor() {
        return courseInstructor;
    }

    public void setcourseInstructor(String courseInstructor) {
        this.courseInstructor = courseInstructor;
    }

    public String getcourseCreatedDate() {
        return courseCreatedDate;
    }

    public void setcourseCreatedDate(String courseCreatedDate) {
        this.courseCreatedDate = courseCreatedDate;
    }
}
