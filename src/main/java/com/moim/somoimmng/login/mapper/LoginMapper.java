package com.moim.somoimmng.login.mapper;

import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LoginMapper {

    // 회원등록
    int insertUserMng(Map<String, Object> paramMap);

    // 회원조회
    Map<String, Object> getUserMng(Map<String, Object> paramMap);

}
