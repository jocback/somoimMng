package com.spring.site.bible.file.mapper;

import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BibFileMapper {

    // 파일정보 조회
    Map<String, Object> getFileDetail(Map<String, Object> paramMap);
}
