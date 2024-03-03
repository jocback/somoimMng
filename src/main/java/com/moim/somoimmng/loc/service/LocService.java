package com.moim.somoimmng.loc.service;

import com.moim.somoimmng.loc.mapper.LocMapper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocService {

    @Autowired
    private LocMapper locMapper;

    /**
     * @title  소모임장소 지도 조회
     * @param  List<Map<String, Object>>
     * @return int
     */
    public List<Map<String, Object>> selectMapStoreList(Map<String, Object> paramMap) {
        List<Map<String, Object>> mapStoreList = locMapper.selectMapStoreList(paramMap);
        return mapStoreList;
    }
}
