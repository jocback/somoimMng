package com.spring.site.somoimmng.login.service;

import com.spring.global.common.exception.CustomException;
import com.spring.global.common.exception.ErrorCode;
import com.spring.site.somoimmng.login.mapper.LoginMapper;
import java.util.List;
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
    public int insertUserMng(Map<String, Object> paramMap) throws Exception {
        if(loginMapper.getUserDuplicate(paramMap)>0) {
//            throw new Exception("아이디 중복");
            throw new CustomException(ErrorCode.INVALID_PASSWORD);
        }

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

    /**
     * @title  모임 등록
     * @param  Map<String, Object>
     * @return int
     */
    public int insertSmiMng(Map<String, Object> paramMap) {
        loginMapper.insertSmiMng(paramMap);
        return loginMapper.insertUserSmiMap(paramMap);
    }

    /**
     * @title  소모임 목록 조회
     * @param  Map<String, Object>
     * @return map
     */
    public List<Map<String, Object>> selectSomoim(Map<String, Object> paramMap) {
        return loginMapper.selectSomoim(paramMap);
    }

}
