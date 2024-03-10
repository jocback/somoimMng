package com.spring.site.somoimmng.login.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LoginMapper {

    // 회원등록
    int insertUserMng(Map<String, Object> paramMap);

    // 회원조회
    Map<String, Object> getUserMng(Map<String, Object> paramMap);

    // 모임 등록
    int insertSmiMng(Map<String, Object> paramMap);

    // 사용자모임매핑
    int insertUserSmiMap(Map<String, Object> paramMap);

    // 소모임 목록
    List<Map<String, Object>> selectSomoim(Map<String, Object> paramMap);

}