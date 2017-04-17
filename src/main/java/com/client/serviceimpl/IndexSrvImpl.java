package com.client.serviceimpl;

import com.client.dao.IndexMapper;
import com.client.service.indexSrv;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by BikeBoy on 2017/4/17.
 */
@Service
public class IndexSrvImpl implements indexSrv {
    @Resource
    private IndexMapper indexMapper;
    @Override
    public String selMaxDate() {
        return indexMapper.selMaxDate();
    }
}
