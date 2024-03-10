package com.spring.site.somoimmng.loc.mapper;

import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LocMapper {

    List<Map<String, Object>> selectMapStoreList(Map<String, Object> paramMap);

}
