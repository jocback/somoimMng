package com.moim.somoimmng.login.service;

import com.moim.somoimmng.login.mapper.LoginMapper;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private LoginMapper loginMapper;

    /**
     * @title  회원 등록
     * @param  Map<String, Object>
     * @return int
     */
    public int insertUserMng(Map<String, Object> paramMap) {
        return loginMapper.insertUserMng(paramMap);
    }

    /**
     * @title  회원 조회
     * @param  Map<String, Object>
     * @return map
     */
    public Map<String, Object> getUserMng(Map<String, Object> paramMap) {
        return loginMapper.getUserMng(paramMap);
    }

}
