package com.spring.site.bible.bib.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BibMapper {

    List<Map<String, Object>> selectBibVers(Map<String, Object> paramMap);

    List<Map<String, Object>> selectBibMain(Map<String, Object> paramMap);

}
