package com.spring.site.bible.file.controller;

import com.spring.site.bible.file.service.BibFileService;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class BibFileController {

    @Autowired
    private BibFileService bibFileService;

    @RequestMapping(value = "/conti/fileView/{fileSeq}", method = {RequestMethod.GET})
    public ResponseEntity<Resource> fileView(@PathVariable("fileSeq") String fileSeq) {

        Map<String, Object> paramMap = new HashMap<String, Object>();
        paramMap.put("fileSeq", fileSeq);
        Map<String, Object> reusltMap = bibFileService.getFileDetail(paramMap);


        String path = (String) reusltMap.get("realFilePath");
        String filename = (String) reusltMap.get("fileNm");

        Resource resource = new FileSystemResource(path+"/"+filename);
        if(!resource.exists()) {
            return new ResponseEntity<Resource>(HttpStatus.NOT_FOUND);
        }
        HttpHeaders header = new HttpHeaders();
        Path filePath = null;
        try{
            filePath = Paths.get(path+"/"+filename);
            header.add("Content-Type", Files.probeContentType(filePath));
        }catch(IOException e) {
            e.printStackTrace();
        }
        return new ResponseEntity<Resource>(resource, header, HttpStatus.OK);
    }

}
