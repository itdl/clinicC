package com.client.service;

import com.client.model.YyRegisterMdl;

import java.util.List;
import java.util.Map;

/**
 * Created by BikeBoy on 2017/4/17.
 */
public interface YySrv {
    List<YyRegisterMdl> selYyCount(Map<String,Object> param);
    int addYy(YyRegisterMdl yy);
    YyRegisterMdl selYyHisty(Map<String,Object> param);
}
