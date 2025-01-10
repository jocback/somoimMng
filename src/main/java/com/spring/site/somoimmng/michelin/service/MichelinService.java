package com.spring.site.somoimmng.michelin.service;

import com.github.pagehelper.Page;
import com.spring.site.somoimmng.michelin.mapper.MichelinMapper;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
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
public class MichelinService {

    @Autowired
    private MichelinMapper michelinMapper;

    /**
     * @title  찬양 파일 업로드
     * @param  Map<String, Object>
     * @return List
     */
    public boolean uploadMichelin(MultipartFile[] uploadFiles)
            throws IOException {

        List<Map<String, Object>> michelinList = new ArrayList<Map<String,Object>>();
//        List<String> michelinList = new ArrayList<String>();
        for(MultipartFile file: uploadFiles) {
            try {
                BufferedReader br = new BufferedReader(new InputStreamReader(file.getInputStream()));
                String line;
                while((line = br.readLine()) != null) {
                    System.out.println(line);
                    String[] lineArr = line.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)");
                    Map<String, Object> michelinMap = new HashMap<String, Object>();
                    michelinMap.put("michelinNm", lineArr[0]);
                    michelinMap.put("fcltyNm", lineArr[1]);
                    michelinMap.put("rdnmadrNm", lineArr[2]);
                    michelinMap.put("areaNm", lineArr[3]);
                    michelinMap.put("ctprvnEngNm", lineArr[4]);
                    michelinMap.put("signguEnglNm", lineArr[5]);
                    michelinMap.put("ctprvnJlangNm", lineArr[6]);
                    michelinMap.put("signguJlangNm", lineArr[7]);
                    michelinMap.put("ctprvnSimchChnlngNm", lineArr[8]);
                    michelinMap.put("signguSimchChnlngNm", lineArr[9]);
                    michelinMap.put("signguTrachChnlngNm", lineArr[10]);
                    michelinMap.put("ctprvnCd", lineArr[11]);
                    michelinMap.put("signguCd", lineArr[12]);
                    michelinMap.put("fcltyLo", lineArr[13]);
                    michelinMap.put("fcltyLa", lineArr[14]);
                    michelinMap.put("hmpgUrl", lineArr[15]);
                    michelinMap.put("telNo", lineArr[16]);
                    michelinMap.put("reprsntMenuNm", lineArr[17]);
                    michelinMap.put("foodSpndPrice", lineArr[18]);
                    michelinMap.put("baseDe", lineArr[19]);
                    michelinList.add(michelinMap);
                }
                br.close();
                michelinList.remove(0);
                michelinMapper.insertMichelinList(michelinList);
            } catch(Exception e) {
                e.printStackTrace();
                return false;
            }

        }
        return true;
    }

    /**
     * @title  미쉐린목록 조회하기
     * @param  Map<String, Object>
     * @return List
     */
    public Page<Map<String, Object>> selectMichelin(Map<String, Object> paramMap) {
        return michelinMapper.selectMichelinList(paramMap);
    }

    /**
     * @title  미쉐린 지도 조회
     * @param  List<Map<String, Object>>
     * @return int
     */
    public List<Map<String, Object>> selectMapMichelinList(Map<String, Object> paramMap) {
        List<Map<String, Object>> mapMichelinList = michelinMapper.selectMapMichelinList(paramMap);
        return mapMichelinList;
    }

}
