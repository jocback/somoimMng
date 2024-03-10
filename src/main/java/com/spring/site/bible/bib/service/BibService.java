package com.spring.site.bible.bib.service;

import com.github.pagehelper.Page;
import com.spring.site.bible.bib.mapper.BibMapper;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BibService {

    @Autowired
    private BibMapper bibMapper;

    /**
     * @title  성경 조회하기
     * @param  Map<String, Object>
     * @return List
     */
    public List<Map<String, Object>> selectBibVers(Map<String, Object> paramMap) {
        return bibMapper.selectBibVers(paramMap);
    }

    /**
     * @title  성경 말씀 조회하기
     * @param  Map<String, Object>
     * @return List
     */
    public List<Map<String, Object>> selectBibMain(Map<String, Object> paramMap) {
        return bibMapper.selectBibMain(paramMap);
    }

}
