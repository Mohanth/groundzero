/*
package com.groundzero.learnings.groundzero.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.DataSource;

public class SecurityConfiguration {

    @Autowired
    DataSource gzDatasource;

    */
/*@Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().dataSource(gzDatasource)
                .usersByUsernameQuery("select user_name,user_id,password,isActive from user where user_email = ?")
                .authoritiesByUsernameQuery("select user_id,user_role from user_roles where user_id = ?");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/admin").hasRole("ADMIN")
                .antMatchers("/user").hasAnyRole("USER", "ADMIN")
                .antMatchers("/").permitAll();
    }*//*


}
*/
