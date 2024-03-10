package com.spring.site.somoimmng.sch.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.pagehelper.Page;
import com.spring.site.somoimmng.sch.mapper.SchMapper;
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
    public int insertSmiSche(Map<String, Object> paramMap) throws JsonProcessingException {

        List<Map<String, Object>> memList = new ArrayList<Map<String, Object>>();
        String[] seqArr = String.valueOf(paramMap.get("memSeq")).split("\\|");
        List<Map<String, Object>> storeList = new ObjectMapper().readValue((String)paramMap.get("locList"), new TypeReference<List<Map<String, Object>>>(){});

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
        paramMap.put("storeList", storeList);
        if(storeList.size()>0) {
            schMapper.deleteSchStore(paramMap);
            schMapper.insertSchStore(paramMap);
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
    public int modifySmiSche(Map<String, Object> paramMap) throws JsonProcessingException {

        List<Map<String, Object>> memList = new ArrayList<Map<String, Object>>();
        String[] seqArr = String.valueOf(paramMap.get("memSeq")).split("\\|");
        List<Map<String, Object>> storeList = new ObjectMapper().readValue((String)paramMap.get("locList"), new TypeReference<List<Map<String, Object>>>(){});

        for(int i=0; i<seqArr.length; i++) {
            Map<String, Object> map = new HashMap<String, Object>();
            map.put("seq", seqArr[i]);
            memList.add(map);
        }

        paramMap.put("memList", memList);

        schMapper.updateSmiSche(paramMap);
        schMapper.deleteSmiAtnMng(paramMap);
        schMapper.insertSmiAtnMng(paramMap);

        paramMap.put("storeList", storeList);
        if(storeList.size()>0) {
            schMapper.deleteSchStore(paramMap);
            schMapper.insertSchStore(paramMap);
        }
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
        schMapper.deleteSchStore(paramMap);
        return 0;
    }

    /**
     * @title  캘린더 날짜 조회
     * @param  Map<String, Object>
     * @return int
     */
    public List<Map<String, Object>> selectMonthList(Map<String, Object> paramMap) {
        List<Map<String, Object>> calList = schMapper.selectMonthList(paramMap);
        return calList;
    }

    /**
     * @title  캘린더 일정 조회
     * @param  Map<String, Object>
     * @return int
     */
    public List<Map<String, Object>> selectCalSchList(Map<String, Object> paramMap) {
        List<Map<String, Object>> schList = schMapper.selectCalSchList(paramMap);
        return schList;
    }

    /**
     * @title  소모임장소 조회
     * @param  List<Map<String, Object>>
     * @return int
     */
    public List<Map<String, Object>> selectSchStoreList(Map<String, Object> paramMap) {
        List<Map<String, Object>> schStoreList = schMapper.selectSchStoreList(paramMap);
        return schStoreList;
    }

}
