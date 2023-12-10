package com.moim.somoimmng.dashboard.service;

import com.moim.somoimmng.dashboard.mapper.DashboardMapper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DashboardService {

    @Autowired
    private DashboardMapper dashboardMapper;

    /**
     * @title  자주 보는 멤버
     * @param  Map<String, Object>
     * @return int
     */
    public List<Map<String,Object>> selectOftMem(Map<String, Object> paramMap) {
        return dashboardMapper.selectOftMem(paramMap);
    }

    /**
     * @title  최근 모임 일정
     * @param  Map<String, Object>
     * @return int
     */
    public List<Map<String,Object>> selectRcntSch(Map<String, Object> paramMap) {
        return dashboardMapper.selectRcntSch(paramMap);
    }

    /**
     * @title  자주 보는 멤버
     * @param  Map<String, Object>
     * @return int
     */
    public List<Map<String,Object>> selectLstAtnDate(Map<String, Object> paramMap) {
        return dashboardMapper.selectLstAtnDate(paramMap);
    }

    /**
     * @title  참여횟수 조회
     * @param  Map<String, Object>
     * @return int
     */
    public List<Map<String,Object>> selectMemAtnCnt(Map<String, Object> paramMap) {
        return dashboardMapper.selectMemAtnCnt(paramMap);
    }

}
