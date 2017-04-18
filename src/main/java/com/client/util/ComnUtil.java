package com.client.util;

/**
 * Created by JQQ on 2017/4/18.
 */
public class ComnUtil {
    public static String GetTimeZh(String time){
        switch(time){
            case "1":
                return GlobalVar.sw;
            case "2":
                return GlobalVar.xw;
            case "3":
                return GlobalVar.ws;
            default:
                return null;
        }
    }
}
