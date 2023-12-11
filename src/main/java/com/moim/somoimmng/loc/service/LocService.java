package com.moim.somoimmng.loc.service;

import com.moim.somoimmng.loc.mapper.LocMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LocService {

    @Autowired
    private LocMapper locMapper;
}
