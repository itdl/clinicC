package com.client.serviceimpl;

import com.client.dao.UserMapper;
import com.client.model.UserMdl;
import com.client.service.UserSrv;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 用户操作类
 * @author
 * @time 2017-4-11
 */
@Service
public class UserSrvImpl implements UserSrv {
    @Resource
    private UserMapper userMapper;

    @Override
    public int register(UserMdl user) {
        return userMapper.register(user);
    }
}
