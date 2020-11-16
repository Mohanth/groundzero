package com.groundzero.learnings.groundzero.user.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class UserOrder {
    String userId;
    String orderId;
    String courseId;
    String purchaseDate;
    String orderAmount;
    String courseName;

    public UserOrder() {
    }
}
