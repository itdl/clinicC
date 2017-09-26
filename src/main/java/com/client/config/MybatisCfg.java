package com.client.config;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;

/**
 * Mybatis配置类。
 * DB bean 扫描配置
 * @author
 * @time 2017/03/03
 */
@Configuration
@MapperScan("com.client.dao")
public class MybatisCfg {}
