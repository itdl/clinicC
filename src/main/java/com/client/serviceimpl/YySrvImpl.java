package com.client.serviceimpl;

import com.client.dao.YyMapper;
import com.client.model.YyRegisterMdl;
import com.client.service.YySrv;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by BikeBoy on 2017/4/17.
 */
@Service
public class YySrvImpl implements YySrv {
    @Resource
    private YyMapper yyMapper;
    @Override
    public List<YyRegisterMdl> selYyCount(Map<String, Object> param) {
        return yyMapper.selYyCount(param);
    }

    @Override
    public int addYy(YyRegisterMdl yy) {
        return yyMapper.addYy(yy);
    }

    @Override
    public YyRegisterMdl selYyHisty(Map<String, Object> param) {
        return yyMapper.selYyHisty(param);
    }
}
