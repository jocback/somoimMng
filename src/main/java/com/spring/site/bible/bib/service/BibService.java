package com.spring.site.bible.bib.service;

import com.github.pagehelper.Page;
import com.spring.site.bible.bib.mapper.BibMapper;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
