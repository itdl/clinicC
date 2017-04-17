package com.client.dao;

import com.client.model.YyRegisterMdl;

import java.util.List;
import java.util.Map;

/**
 * Created by BikeBoy on 2017/4/17.
 */
public interface YyMapper {
    List<YyRegisterMdl> selYyCount(Map<String,Object> param);
}
