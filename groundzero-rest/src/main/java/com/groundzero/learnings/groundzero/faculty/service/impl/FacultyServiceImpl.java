package com.groundzero.learnings.groundzero.faculty.service.impl;

import com.groundzero.learnings.groundzero.exception.FacultyNotFoundException;
import com.groundzero.learnings.groundzero.exception.StudentNotFoundException;
import com.groundzero.learnings.groundzero.faculty.model.FacultyDetails;
import com.groundzero.learnings.groundzero.faculty.service.FacultyService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.thymeleaf.spring5.SpringTemplateEngine;

import java.util.HashMap;
import java.util.Map;


@Repository
@Slf4j
public class FacultyServiceImpl implements FacultyService {

    @Autowired
    private JdbcTemplate gzJdbcTemplate;
    @Autowired
    private SpringTemplateEngine templateEngine;
    @Autowired
    private JavaMailSender mailSender;


    @Override
    public FacultyDetails getFacultyDetailsById(String facultyid) {

        FacultyDetails facultyDetails= null;

        try{
            String sql = "SELECT * FROM faculty WHERE faculty_id = ?";
            Map<String, Object> paramMap = new HashMap<>();
            paramMap.put("facultyId", facultyid);
             facultyDetails = gzJdbcTemplate.queryForObject(sql, new Object[]{facultyid},
                    BeanPropertyRowMapper.newInstance(FacultyDetails.class));
        }catch(Exception e){
            log.error("Error:" + e);
            throw new FacultyNotFoundException();

        }
        return facultyDetails;

    }

    public String savefacultydetails(FacultyDetails facultyDetails) {
        String sql = "INSERT into faculty( faculty_name , faculty_email , faculty_phone ,password  ) VALUES(?,?,?,?)";
        gzJdbcTemplate.update(sql, facultyDetails.getFacultyName(), facultyDetails.getFacultyEmail(), facultyDetails.getFacultyPhone() ,facultyDetails.getPassword());
        return "successfully saved";
    }
}
