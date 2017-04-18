package com.client.service;

import com.client.model.UserMdl;

import java.util.Map;

/**
 * Created by BikeBoy on 2017/4/11.
 */
public interface UserSrv {
    int register(UserMdl user);
    UserMdl selUser(Map<String,Object> param);
    UserMdl loginCheck(Map<String,Object> param);
}
