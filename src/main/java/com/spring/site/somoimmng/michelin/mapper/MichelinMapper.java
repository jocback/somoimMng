package com.spring.site.somoimmng.michelin.mapper;

import com.github.pagehelper.Page;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MichelinMapper {

    void deleteMichelin();

    int insertMichelinList(List<Map<String, Object>> listMap);

    Page<Map<String, Object>> selectMichelinList(Map<String, Object> paramMap);

    List<Map<String, Object>> selectMapMichelinList(Map<String,Object> paramMap);

}
