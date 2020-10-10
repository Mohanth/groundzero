package com.groundzero.learnings.groundzero.courses.service.impl;

import com.groundzero.learnings.groundzero.courses.CourseDetails;
import com.groundzero.learnings.groundzero.courses.service.CoursesService;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Repository
@Transactional
@Configuration
public class CoursesServiceImpl implements CoursesService {

    public CourseDetails getCourseDetailsById(String courseid) {

        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://groundzero-db.cqqbhji3hylj.us-east-1.rds.amazonaws.com/groundzero_db");
        dataSource.setUsername("admin");
        dataSource.setPassword("groundzero");
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);


        String sql = "SELECT * FROM courses WHERE course_id = ?";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("courseId",courseid);
        CourseDetails courseDetails = jdbcTemplate.queryForObject(sql,new Object[]{courseid},
                BeanPropertyRowMapper.newInstance(CourseDetails.class));
        return courseDetails;

    }

    @Override
    public String saveCourseDetails(CourseDetails courseDetails) {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://groundzero-db.cqqbhji3hylj.us-east-1.rds.amazonaws.com/groundzero_db");
        dataSource.setUsername("admin");
        dataSource.setPassword("groundzero");
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);

        String sql="INSERT into courses(course_id , course_name , course_price, course_instructor) values (?,?,?,?)";
        jdbcTemplate.update(sql, courseDetails.getCourseId() , courseDetails.getCourseName(), courseDetails.getCoursePrice(),courseDetails.getCourseInstructor());
        return "successfully saved";
    }
}
