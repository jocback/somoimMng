package com.spring.site.somoimmng.dashboard.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface DashboardMapper {

    // 자주 보는 사람
    List<Map<String, Object>> selectOftMem(Map<String, Object> paramMap);

    // 최근 모임 일정
    List<Map<String, Object>> selectRcntSch(Map<String, Object> paramMap);

    // 참석한 일정
    List<Map<String, Object>> selectAtnSch(Map<String, Object> paramMap);

    // 최종 참석일
    List<Map<String, Object>> selectLstAtnDate(Map<String, Object> paramMap);

    // 참여횟수 조회
    List<Map<String, Object>> selectMemAtnCnt(Map<String, Object> paramMap);

}
