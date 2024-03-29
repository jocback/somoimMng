package com.spring.global.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebConfig extends WebMvcConfigurerAdapter {

    @Autowired
    InterceptorConfig interceptorConfig;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(interceptorConfig)
                .addPathPatterns("/**/*")
                .excludePathPatterns("/**/*.js")
                .excludePathPatterns("/**/*.css")
                .excludePathPatterns("/**/**/*.js")
                .excludePathPatterns("/**/**/*.css")
                .excludePathPatterns("/**/**/*.map")
                .excludePathPatterns("/**/**/*.png")
                .excludePathPatterns("/**/**/*.woff2")
                .excludePathPatterns("/**/**/*.ttf")
                .excludePathPatterns("/*.ico");
    }
}
