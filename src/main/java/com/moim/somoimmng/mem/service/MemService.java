package com.moim.somoimmng.mem.service;

import com.moim.somoimmng.mem.mapper.MemMapper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemService {

    @Autowired
    private MemMapper memMapper;

    /**
     * @title  회원등록
     * @param  Map<String, Object>
     * @return int
     */
    public int insertMemMng(Map<String, Object> paramMap) {
        return memMapper.insertMemMng(paramMap);
    }

    /**
     * @title  회원조회
     * @param  Map<String, Object>
     * @return List
     */
    public List<Map<String, Object>> selectMemMng(Map<String, Object> paramMap) {
        return memMapper.selectMemMng(paramMap);
    }

    /**
     * @title  회원목록 가져오기
     * @param  Map<String, Object>
     * @return List
     */
    public List<Map<String, Object>> getMemList(Map<String, Object> paramMap) {
        return memMapper.getMemList(paramMap);
    }



}
