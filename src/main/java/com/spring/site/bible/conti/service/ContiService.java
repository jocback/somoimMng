package com.spring.site.bible.conti.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.pagehelper.Page;
import com.spring.site.bible.conti.mapper.ContiMapper;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ContiService {

    @Autowired
    private ContiMapper contiMapper;

    /**
     * @title  콘티 조회
     * @param  Map<String, Object>
     * @return List
     */
    public Page<Map<String, Object>> selectContiMng(Map<String, Object> paramMap) {
        return contiMapper.selectContiMng(paramMap);
    }

    /**
     * @title  악보 조회(자동완성)
     * @param  Map<String, Object>
     * @return List
     */
    public List<Map<String, Object>> selectScoreAutoCmpt(Map<String, Object> paramMap) {
        return contiMapper.selectScoreAutoCmpt(paramMap);
    }

    /**
     * @title  콘티 등록
     * @param  Map<String, Object>
     * @return int
     */
    public int registerContiMng(Map<String, Object> paramMap) throws JsonProcessingException {
        List<Map<String, Object>> memList = new ArrayList<Map<String, Object>>();
        List<Map<String, Object>> scoreList = new ObjectMapper().readValue((String)paramMap.get("scoreList"), new TypeReference<List<Map<String, Object>>>(){});

        paramMap.put("scoreList", scoreList);


        // 콘티관리 등록
        contiMapper.insertContiMng(paramMap);

        // 콘티 찬양리스트 등록
        if(scoreList.size()>0) {
            contiMapper.deleteContiPraiseList(paramMap);
            contiMapper.insertContiPraiseList(paramMap);
        }
        
        return 0;
    }


    /**
     * @title  악보 조회
     * @param  Map<String, Object>
     * @return List
     */
    public Page<Map<String, Object>> selectScore(Map<String, Object> paramMap) {
        return contiMapper.selectScore(paramMap);
    }

    /**
     * @title  콘티 악보 조회
     * @param  Map<String, Object>
     * @return List
     */
    public List<Map<String, Object>> selectContiScoreList(Map<String, Object> paramMap) {
        return contiMapper.selectContiScoreList(paramMap);
    }

    /**
     * @title  찬양 파일 업로드
     * @param  Map<String, Object>
     * @return List
     */
    public int uploadScore(MultipartFile[] uploadFiles, Map<String, Object> paramMap)
            throws IOException {

        Date nowdate = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
        String strDate = sdf.format(nowdate);
        String rootPath = "/Users/jaehoonyoun/temp/bibConti";

        String filePath = rootPath+"/"+strDate;

        Path path = Paths.get(filePath);
        if(!Files.isDirectory(path)) {
            Files.createDirectory(path);
        }

        contiMapper.insertPraiseScore(paramMap);

        for(MultipartFile uploadFile: uploadFiles) {

            Map<String, Object> fileMap = new HashMap<String, Object>();

            String originalName = uploadFile.getOriginalFilename();
            long atchFileSize = uploadFile.getSize();
            String contentType = uploadFile.getContentType();
            String extension = originalName.substring(originalName.indexOf("."), originalName.length());
            UUID uuid = UUID.randomUUID();
            String newFileName = uuid.toString()+extension;

            fileMap.put("relSeq", paramMap.get("scoreSeq"));
            fileMap.put("fileNm", newFileName);
            fileMap.put("realFileNm", originalName);
            fileMap.put("realFilePath", filePath);
            fileMap.put("fileSize", uploadFile.getSize());
            fileMap.put("fileExt", extension.replace(".", ""));

            contiMapper.insertFileMng(fileMap);

            Files.copy(uploadFile.getInputStream(), Paths.get(filePath+"/"+newFileName));

        }

        return 0;
    }
}
