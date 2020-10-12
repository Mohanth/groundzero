package com.groundzero.learnings.groundzero.user.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class UserCredits {
    String userId;
    String coinsAvailable;

    public UserCredits() {
    }

}
