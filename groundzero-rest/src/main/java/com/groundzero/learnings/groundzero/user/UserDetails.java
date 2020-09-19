package com.groundzero.learnings.groundzero.user;

import lombok.Data;

@Data
public class UserDetails {
    String userId;
    String userFullName;
    String userFirstName;
    String userLastName;
    String userEmail;
    String userPhone;
    String createdDate;
    String isActive;

}
