package com.groundzero.learnings.groundzero.courses;

import com.groundzero.learnings.groundzero.subscription.model.Subscription;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CourseDetails {
    public String courseId;
    public String courseName;
    public String coursePrice;
    public String courseInstructor;
    public String courseCreatedDate;
    public String courseJoinedDt;
    public Subscription subscription;

    public CourseDetails(){}
}
