package com.client;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.velocity.VelocityAutoConfiguration;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * 启动类。
 * @author
 * @time 2016/12/16
 */
@SuppressWarnings("deprecation")
@SpringBootApplication
@EnableAutoConfiguration(exclude = {VelocityAutoConfiguration.class})
public class ApplicationMain {
    /**
     * 启动函数。
     * @param args 启动参数
     */
    public static void main(String[] args){
        SpringApplication.run(ApplicationMain.class, args);
    }
}