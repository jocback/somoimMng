package com.moim.somoimmng.config.security;

import com.moim.somoimmng.login.service.LoginService;
import com.moim.somoimmng.login.vo.UserVO;
import com.moim.somoimmng.util.EncUtil;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class LoginProvider implements AuthenticationProvider {

    @Autowired
    private LoginService loginService;


    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        Object details = authentication.getDetails();

        String userId = authentication.getName();
        String userPw = (String) authentication.getCredentials();
        String decPw = EncUtil.decrypt(userPw, "somoim");


        Object resultObj = null;
        String resultUserPw = "";

        UserVO param = new UserVO();
        param.setUserId(userId);
        param.setUserPw(userPw);

        UserVO userInfo = new UserVO();


        Map<String, Object> paramMap = new HashMap<String, Object>();
        paramMap.put("userId", userId);
        paramMap.put("userPw", userPw);

        Map<String, Object> userMap = loginService.getUserMng(paramMap);

        // 사용자 존재여부
        if(userMap==null) {
            throw new BadCredentialsException("아이디가 존재하지 않습니다.");
        } else {
            resultUserPw = (String) userMap.get("userPw");
            userMap.put("userPw", "");
            resultObj = userMap;
        }

        // 비밀번호 체크
        if(!decPw.equals(resultUserPw)) {
            throw new BadCredentialsException("비밀번호가 일치하지 않습니다.");
        }

        // 사용자 존재여부
//        if(userInfo==null) {
//            throw new BadCredentialsException("아이디가 존재하지 않습니다.");
//        } else {
//            resultUserPw = userInfo.getUserPw();
//            userInfo.setUserPw(null);
//            resultObj = userInfo;
//        }

        // 비밀번호 체크
//        if(!userPw.equals(resultUserPw)){
//            throw new BadCredentialsException("비밀번호가 일치하지 않습니다.");
//        }


        // 권한 리스트
        List<GrantedAuthority> roles = new ArrayList<GrantedAuthority>();
        roles.add(new SimpleGrantedAuthority("MEMBER"));        // 별도 권한 관리는 만들지 않아 임의로 입력

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userId, userPw, roles);
        authToken.setDetails(resultObj);

        return authToken;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}
