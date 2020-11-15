package com.groundzero.learnings.groundzero.user.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@Getter
@Setter
public class UserDetails {
    String userId;
    String userFullName;
    String userFirstName;
    String userLastName;
    String userEmail;
    String userPhone;
    String createdDt;
    String isActive;
    String password;

    public UserDetails() {

    }

}
