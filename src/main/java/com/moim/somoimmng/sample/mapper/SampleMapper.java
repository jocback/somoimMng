package com.moim.somoimmng.sample.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SampleMapper {

    String selectTest();
}
