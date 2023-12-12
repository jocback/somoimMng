package com.moim.somoimmng.config.security;

import lombok.Data;

@Data
public class ResponseDataDTO {

    private String code;
    private String status;
    private String message;
    private Object item;
}
