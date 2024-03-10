package com.spring.global.config;

import java.io.IOException;
import java.util.Arrays;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

@RequiredArgsConstructor
public class AuthenticationFilter extends OncePerRequestFilter {

    private static final String[] excludeEndpoints = new String[] {"/lib/**", "/js/**"};

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {

        HttpSession session = request.getSession();

        String uri = request.getRequestURI();

        // 로그인 페이지 진입 전 url 저장
        if(!"/login/loginForm".equals(uri)) {
            session.setAttribute("redirectUrl", uri);
        }
        filterChain.doFilter(request, response);
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
//        return super.shouldNotFilter(request);
        return Arrays.stream(excludeEndpoints).anyMatch(e -> new AntPathMatcher().match(e, request.getServletPath()));
    }
}
