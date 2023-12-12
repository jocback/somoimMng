package com.moim.somoimmng.config.security;

import com.gradle.gradletemplate.login.service.LoginService;
import com.gradle.gradletemplate.login.vo.UserVO;
import java.util.Collection;
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

    @Autowired
    private LoginService loginService;

    @Override
    public UserDetails loadUserByUsername(String memberId) throws UsernameNotFoundException {
        UserVO paramVO = new UserVO();
        paramVO.setUserId(memberId);
        UserVO userVO = loginService.selectUser(paramVO);
        userVO.setUserId("admin");

        return new User(userVO.getUserId(), userVO.getUserPw(), getAuthorities(userVO));
    }

    private Collection<? extends GrantedAuthority> getAuthorities(UserVO userVO) {
        String[] userRoles = new String[1];
        userRoles[0] = "MEMBER";
        Collection<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList(userRoles);
        return authorities;
    }
}
