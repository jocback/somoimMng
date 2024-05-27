package com.spring.site.bible.conti.mapper;

import com.github.pagehelper.Page;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ContiMapper {

    // 콘티 조회
    Page<Map<String, Object>> selectContiMng(Map<String, Object> paramMap);

    // 콘티 등록
    int insertContiMng(Map<String, Object> paramMap);

    // 콘티 찬양리스트 삭제
    int deleteContiPraiseList(Map<String, Object> paramMap);

    // 콘티 찬양리스트 등록
    int insertContiPraiseList(Map<String, Object> paramMap);

   // 악보 조회
    List<Map<String, Object>> selectScoreAutoCmpt(Map<String, Object> paramMap);

    // 악보 조회
    Page<Map<String, Object>> selectScore(Map<String, Object> paramMap);

    // 콘티 목록 조회
    List<Map<String, Object>> selectContiScoreList(Map<String, Object> paramMap);

    // 악보 등록
    int insertPraiseScore(Map<String, Object> paramMap);

    // 파일 등록
    int insertFileMng(Map<String, Object> paramMap);

}
