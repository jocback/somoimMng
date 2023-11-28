package com.moim.somoimmng.mem.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemMapper {

    int insertMemMng(Map<String, Object> paramMap);

    List<Map<String, Object>> selectMemMng(Map<String, Object> paramMap);

    List<Map<String, Object>> getMemList(Map<String, Object> paramMap);
}
