package com.client.dao;

import com.client.model.YyRegisterMdl;
import com.client.model.YyconfigMdl;

import java.util.List;
import java.util.Map;

/**
 * Created by BikeBoy on 2017/4/17.
 */
public interface YyMapper {
    List<YyRegisterMdl> selYyCount(Map<String,Object> param);
    int addYy(YyRegisterMdl yy);
    YyRegisterMdl selYyHisty(Map<String,Object> param);
    List<YyconfigMdl> stopRepnList(Map<String,Object> param);
}
