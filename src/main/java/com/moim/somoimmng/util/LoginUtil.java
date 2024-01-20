package com.moim.somoimmng.util;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class LoginUtil {

    public static boolean isLogin() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication == null || AnonymousAuthenticationToken.class.isAssignableFrom(authentication.getClass())) {
            return false;
        }
        return authentication.isAuthenticated();
    }

    /**
     * @title  로그인 세션의 특정정보를 가져온다.
     * @param
     * @return Map
     */
    public static Map<String, Object> getInfo() {
        if(isLogin()) {
            try {
                Map<String, Object> userInfo = (Map<String, Object>) SecurityContextHolder.getContext().getAuthentication().getDetails();
                return userInfo;
            } catch(Exception e) {
                log.error(e.getMessage(), e);
                return null;
            }
        } else {
            return null;
        }
    }

    /**
     * @title  로그인 세션의 특정정보를 가져온다.
     * @param  String (UserMap 변수명)
     * @return String
     */
    public static String getInfoValue(String valNm) {
        if(isLogin()) {
            try {
                String value   = null;
                Map<String, Object> userMap = null;

                userMap = (Map<String, Object>) SecurityContextHolder.getContext().getAuthentication().getDetails();

                value = (String) userMap.get(valNm);

                return value;
            } catch (Exception e) {
                log.error(e.getMessage(), e);
                return null;
            }
        } else {
            return null;
        }
    }

    /**
     * @title  시큐리티 유저상세 정보 셋팅
     * @param  Map
     */
    public static void setSecurityUserDetail(Map<String, Object> paramMap) {
        List<GrantedAuthority> roles = new ArrayList<GrantedAuthority>();
        roles.add(new SimpleGrantedAuthority("ROLE_USER"));
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(paramMap.get("userId"), null, roles);
        authToken.setDetails(paramMap);
        SecurityContextHolder.getContext().setAuthentication(authToken);
    }


}
