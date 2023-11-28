package com.moim.somoimmng.sch.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SchMapper {
    // 일정등록
    int insertSmiSche(Map<String, Object> paramMap);

    // 참여인원등록
    int insertSmiAtnMng(Map<String, Object> paramMap);

    List<Map<String, Object>> selectSmiSche(Map<String, Object> paramMap);
}
