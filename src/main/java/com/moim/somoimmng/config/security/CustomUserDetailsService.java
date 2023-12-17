package com.moim.somoimmng.config.security;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String memberId) throws UsernameNotFoundException {
//        UserVO paramVO = new UserVO();
//        paramVO.setUserId(memberId);
//        UserVO userVO = loginService.selectUser(paramVO);
//        userVO.setUserId("admin");

        String userId = "admin";
        String userPw = "1234";
        Map<String, Object> userVO = new HashMap<String, Object>();

        return new User(userId, userPw, getAuthorities(userVO));
    }

    private Collection<? extends GrantedAuthority> getAuthorities(Map<String, Object> userVO) {
        String[] userRoles = new String[1];
        userRoles[0] = "MEMBER";
        Collection<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList(userRoles);
        return authorities;
    }
}
