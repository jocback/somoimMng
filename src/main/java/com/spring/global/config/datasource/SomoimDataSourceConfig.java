package com.spring.global.config.datasource;

import com.zaxxer.hikari.HikariDataSource;
import javax.sql.DataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

//@Configuration
//@MapperScan(value="com.spring.site.somoimmng.**.mapper")
public class SomoimDataSourceConfig {

//    private final String SOMOIM_DATA_SOURCE = "SomoimDataSource";
//
//    @Primary
//    @Bean(SOMOIM_DATA_SOURCE)
//    @ConfigurationProperties(prefix="spring.somoim.datasource.hikari")
//    public DataSource SomoimDataSource() {
//        return DataSourceBuilder.create()
//                .type(HikariDataSource.class)
//                .build();
//    }
//
//    @Primary
//    @Bean
//    public SqlSessionFactory SomoimSqlSessionFActory(DataSource dataSource) throws Exception {
//
//        SqlSessionFactoryBean bean = new SqlSessionFactoryBean();
//        bean.setDataSource(dataSource);
//        Resource[] res = new PathMatchingResourcePatternResolver().getResources("classpath:com/spring/site/somoimmng/*/mapper/*.xml");
//        bean.setMapperLocations(res);
//
//        Resource mybatisConfig = new PathMatchingResourcePatternResolver().getResource("classpath:mybatis-config.xml");
//
//        return bean.getObject();
//
//    }

}
