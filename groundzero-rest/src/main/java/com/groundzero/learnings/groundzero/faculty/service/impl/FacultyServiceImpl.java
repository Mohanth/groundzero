package com.groundzero.learnings.groundzero.faculty.service.impl;

import com.groundzero.learnings.groundzero.faculty.model.FacultyDetails;
import com.groundzero.learnings.groundzero.faculty.service.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;


@Repository
@Transactional
@Configuration
public class FacultyServiceImpl implements FacultyService {

    @Autowired
    private JdbcTemplate gzJdbcTemplate;

    @Override
    public FacultyDetails getFacultyDetailsById(String facultyid) {

        String sql = "SELECT * FROM faculty WHERE faculty_id = ?";
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("facultyId", facultyid);
        FacultyDetails facultyDetails = gzJdbcTemplate.queryForObject(sql, new Object[]{facultyid},
                BeanPropertyRowMapper.newInstance(FacultyDetails.class));
        return facultyDetails;
    }

    @Override
    public String savefacultydetails(FacultyDetails facultyDetails) {
        String sql = "INSERT into faculty(faculty_id , faculty_name , faculty_firstname , faculty_lastname , faculty_email , faculty_phone , preferred_subject ) VALUES(?,?,?,?,?,?,?)";
        gzJdbcTemplate.update(sql, facultyDetails.getFacultyId(), facultyDetails.getFacultyName(), facultyDetails.getFacultyFirstName(), facultyDetails.getFacultyLastName(), facultyDetails.getFacultyEmail(), facultyDetails.getFacultyPhone(), facultyDetails.getPreferredSubject());
        return "successfully saved";
    }
}
