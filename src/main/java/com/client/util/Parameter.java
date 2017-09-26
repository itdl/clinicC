package com.client.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Parameter {
    private HttpServletRequest request;
    private HttpServletResponse response;

    private Map<String, String[]> map;

    public String getStringValue(String key) {
        if (getMap().containsKey(key)) {
            return getMap().get(key)[0];
        }
        return null;
    }

    public String getStringValue(String key, String defaultValue) {
        if (getMap().containsKey(key)) {
            return getMap().get(key)[0];
        } else {
            return defaultValue;
        }
    }

    public int getIntValue(String key) {
        try {
            return Integer.parseInt(getStringValue(key));
        } catch (Exception e) {

        }
        return 0;
    }

    public double getDoubleValue(String key) {
        double value = 0;
        try {
            value = Double.parseDouble(getStringValue(key));
        } catch (Exception e) {

        }

        return value;
    }

    public String[] getValues(String key) {
        return getMap().get(key);
    }

    public HttpServletRequest getRequest() {
        return request;
    }

    public void setRequest(HttpServletRequest request) {
        this.request = request;
    }

    public HttpServletResponse getResponse() {
        return response;
    }

    public void setResponse(HttpServletResponse response) {
        this.response = response;
    }


    public Map<String, String[]> getMap() {
        return map;
    }

    public void setMap(Map<String, String[]> map) {
        this.map = new HashMap();
        List list = new ArrayList();
        list.addAll(map.keySet());
        for (int i = 0; i < list.size(); i++) {
            String key = list.get(i).toString();
            this.map.put(key, map.get(key));
        }
    }

    public boolean containsKey(String key) {
        return this.getMap().containsKey(key);
    }

    public void setValue(String key, String[] value) {
        this.getMap().put(key, value);
    }

    public void setValue(String key, String stringValue) {
        this.getMap().put(key, new String[]{stringValue});
    }

}
