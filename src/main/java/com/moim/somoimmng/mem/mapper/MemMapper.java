package com.moim.somoimmng.mem.mapper;

import com.github.pagehelper.Page;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemMapper {

    // 회원 등록
    int insertMemMng(Map<String, Object> paramMap);

    // 회원 수정
    int updateMemMng(Map<String, Object> paramMap);

    // 회원 삭제
    int deleteMemMng(Map<String, Object> paramMap);

    Page<Map<String, Object>> selectMemMng(Map<String, Object> paramMap);

    List<Map<String, Object>> getMemList(Map<String, Object> paramMap);

    Map<String, Object> selectMemMngDetail(Map<String, Object> paramMap);
}
