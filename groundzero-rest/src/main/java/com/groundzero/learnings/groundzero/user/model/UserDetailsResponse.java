package com.groundzero.learnings.groundzero.user.model;

import lombok.Data;

import java.util.List;

@Data
public class UserDetailsResponse {
    UserDetails userDetails;
    UserCredits userCredits;
    List<UserOrder> userOrder;
}
