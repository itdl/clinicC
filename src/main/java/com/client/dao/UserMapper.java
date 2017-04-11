package com.client.dao;

import com.client.model.UserMdl;

import java.util.Map;

/**
 * Created by BikeBoy on 2017/4/11.
 */
public interface UserMapper {
    int register(UserMdl user);
    UserMdl selUser(Map<String,Object> param);
}
