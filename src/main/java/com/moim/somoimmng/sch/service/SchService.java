package com.moim.somoimmng.sch.service;

import com.github.pagehelper.Page;
import com.moim.somoimmng.sch.mapper.SchMapper;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SchService {

    @Autowired
    private SchMapper schMapper;

    /**
     * @title  일정목록 조회하기
     * @param  Map<String, Object>
     * @return List
     */
    public Page<Map<String, Object>> selectSmiSche(Map<String, Object> paramMap) {
        return schMapper.selectSmiSche(paramMap);
    }

    /**
     * @title  일정 등록
     * @param  Map<String, Object>
     * @return int
     */
    public int insertSmiSche(Map<String, Object> paramMap) {

        List<Map<String, Object>> memList = new ArrayList<Map<String, Object>>();
        String[] seqArr = String.valueOf(paramMap.get("memSeq")).split("\\|");

        for(int i=0; i<seqArr.length; i++) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("seq", seqArr[i]);
            memList.add(map);
        }

        paramMap.put("memList", memList);

        schMapper.insertSmiSche(paramMap);
        if(seqArr.length>0) {
            schMapper.insertSmiAtnMng(paramMap);
        }
        return 0;
    }

    /**
     * @title  일정 상세 조회
     * @param  Map<String, Object>
     * @return int
     */
    public Map<String, Object> selectSchDetail(Map<String, Object> paramMap) {
        Map<String, Object> resultMap = schMapper.selectSmiScheDetail(paramMap);
        List<Map<String, Object>> memList = schMapper.selectAtnMemList(paramMap);
        resultMap.put("memList", memList);
        return resultMap;
    }

    /**
     * @title  일정 수정
     * @param  Map<String, Object>
     * @return int
     */
    public int modifySmiSche(Map<String, Object> paramMap) {

        List<Map<String, Object>> memList = new ArrayList<Map<String, Object>>();
        String[] seqArr = String.valueOf(paramMap.get("memSeq")).split("\\|");

        for(int i=0; i<seqArr.length; i++) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("seq", seqArr[i]);
            memList.add(map);
        }

        paramMap.put("memList", memList);

        schMapper.updateSmiSche(paramMap);
        schMapper.deleteSmiAtnMng(paramMap);
        schMapper.insertSmiAtnMng(paramMap);
        return 0;
    }

    /**
     * @title  일정 삭제
     * @param  Map<String, Object>
     * @return int
     */
    public int deleteSmiSche(Map<String, Object> paramMap) {
        schMapper.deleteSmiSche(paramMap);
        schMapper.deleteSmiAtnMng(paramMap);
        return 0;
    }

}
