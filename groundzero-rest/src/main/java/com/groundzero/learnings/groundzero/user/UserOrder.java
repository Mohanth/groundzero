package com.groundzero.learnings.groundzero.user;

import lombok.Data;

@Data
public class UserOrder {
    String userId;
    String orderId;
    String courseId;
    String purchaseDate;
    String orderAmount;
}
