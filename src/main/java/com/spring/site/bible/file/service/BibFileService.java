package com.spring.site.bible.file.service;

import com.spring.site.bible.file.mapper.BibFileMapper;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BibFileService {

    @Autowired
    private BibFileMapper bibFileMapper;

    /**
     * @title  파일 조회
     * @param  Map<String, Object>
     * @return List
     */
    public Map<String, Object> getFileDetail(Map<String, Object> paramMap) {
        return bibFileMapper.getFileDetail(paramMap);
    }

}
