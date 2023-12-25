package com.moim.somoimmng.mem.service;

import com.github.pagehelper.Page;
import com.moim.somoimmng.mem.mapper.MemMapper;
import java.util.ArrayList;
import java.util.HashMap;
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
     * @title  회원 수정
     * @param  Map<String, Object>
     * @return int
     */
    public int modifyMemMng(Map<String, Object> paramMap) {

        memMapper.updateMemMng(paramMap);
        return 0;
    }

    /**
     * @title  회원 삭제
     * @param  Map<String, Object>
     * @return int
     */
    public int deleteMemMng(Map<String, Object> paramMap) {
        memMapper.deleteMemMng(paramMap);
        return 0;
    }

    /**
     * @title  회원조회
     * @param  Map<String, Object>
     * @return List
     */
    public Page<Map<String, Object>> selectMemMng(Map<String, Object> paramMap) {
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

    /**
     * @title  회원 상세 조회
     * @param  Map<String, Object>
     * @return int
     */
    public Map<String, Object> selectMemDetail(Map<String, Object> paramMap) {
        Map<String, Object> resultMap = memMapper.selectMemMngDetail(paramMap);
        return resultMap;
    }


}
