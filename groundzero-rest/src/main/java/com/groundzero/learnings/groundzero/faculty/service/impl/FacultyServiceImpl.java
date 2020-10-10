package com.groundzero.learnings.groundzero.faculty.service.impl;

import com.groundzero.learnings.groundzero.faculty.FacultyDetails;
import com.groundzero.learnings.groundzero.faculty.service.FacultyService;
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
public class FacultyServiceImpl implements FacultyService {

    @Override
    public FacultyDetails getFacultyDetailsById(String facultyid) {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://groundzero-db.cqqbhji3hylj.us-east-1.rds.amazonaws.com/groundzero_db");
        dataSource.setUsername("admin");
        dataSource.setPassword("groundzero");
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);


        String sql = "SELECT * FROM faculty WHERE faculty_id = ?";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("facultyId", facultyid);
        FacultyDetails facultyDetails = jdbcTemplate.queryForObject(sql, new Object[]{facultyid},
                BeanPropertyRowMapper.newInstance(FacultyDetails.class));
        return facultyDetails;
    }

    @Override
    public String savefacultydetails(FacultyDetails facultyDetails) {
        DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://groundzero-db.cqqbhji3hylj.us-east-1.rds.amazonaws.com/groundzero_db");
        dataSource.setUsername("admin");
        dataSource.setPassword("groundzero");
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);

        String sql = "INSERT into faculty(faculty_id , faculty_name , faculty_firstname , faculty_lastname , faculty_email , faculty_phone , preferred_subject ) VALUES(?,?,?,?,?,?,?)";
        jdbcTemplate.update(sql,facultyDetails.getFacultyId(),facultyDetails.getFacultyName(),facultyDetails.getFacultyFirstName(),facultyDetails.getFacultyLastName(),facultyDetails.getFacultyEmail(),facultyDetails.getFacultyPhone(),facultyDetails.getPreferredSubject());
        return "successfully saved";
    }
}
