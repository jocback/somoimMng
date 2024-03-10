package com.spring.site.somoimmng.login.vo;

import lombok.Data;

@Data
public class UserVO {

    private String userId;
    private String userPw;
    private String userName;
    private String phone;
    private String email;
    private String role;
    private String createdTime;
    private String updateTime;

}
