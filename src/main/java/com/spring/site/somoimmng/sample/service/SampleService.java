package com.spring.site.somoimmng.sample.service;

import com.spring.site.somoimmng.sample.mapper.SampleMapper;
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
