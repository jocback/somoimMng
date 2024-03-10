package com.spring.global.config.security;

import javax.servlet.http.HttpServletRequest;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.web.authentication.WebAuthenticationDetails;

/**
 * @title  로그인 HTTP 세부정보 소유자
 * @author Gamma
 * @since  2024. 03. 03.
 */

@Getter
@Setter
public class LoginWebAuthenticationDetails extends WebAuthenticationDetails {

    private String encPw;

    public LoginWebAuthenticationDetails(HttpServletRequest request) {
        super(request);
        encPw = request.getParameter("encPw");
    }
}
