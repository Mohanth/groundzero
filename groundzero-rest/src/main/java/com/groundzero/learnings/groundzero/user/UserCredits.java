package com.groundzero.learnings.groundzero.user;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class UserCredits {
    String userId;
    String coinsAvaliable;

    public UserCredits() {
    }
     //getters and setters

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getCoinsAvaliable() {
        return coinsAvaliable;
    }

    public void setCoinsAvaliable(String coinsAvaliable) {
        this.coinsAvaliable = coinsAvaliable;
    }
}
