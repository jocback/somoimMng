package com.moim.somoimmng.sch.mapper;

import com.github.pagehelper.Page;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SchMapper {
    // 일정등록
    int insertSmiSche(Map<String, Object> paramMap);

    // 일정수정
    int updateSmiSche(Map<String, Object> paramMap);

    // 일정 삭제
    int deleteSmiSche(Map<String, Object> paramMap);

    // 참여인원등록
    int insertSmiAtnMng(Map<String, Object> paramMap);

    // 참여인원삭제
    int deleteSmiAtnMng(Map<String, Object> paramMap);

    // 일정 목록 조회
    Page<Map<String, Object>> selectSmiSche(Map<String, Object> paramMap);

    // 일정 조회
    Map<String, Object> selectSmiScheDetail(Map<String, Object> paramMap);

    // 일정 멤버 조회
    List<Map<String, Object>> selectAtnMemList(Map<String, Object> paramMap);

    // 캘린더 날짜 조회
    List<Map<String, Object>> selectMonthList(Map<String, Object> paramMap);

    // 캘린더 일정 조회
    List<Map<String, Object>> selectCalSchList(Map<String, Object> paramMap);

}
