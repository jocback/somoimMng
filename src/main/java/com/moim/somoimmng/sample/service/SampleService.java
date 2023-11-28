package com.moim.somoimmng.sample.service;

import com.moim.somoimmng.sample.mapper.SampleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SampleService {

    @Autowired
    private SampleMapper sampleMapper;

    public String selectTest() {
        return sampleMapper.selectTest();
    }

}
