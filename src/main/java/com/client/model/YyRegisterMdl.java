package com.client.model;

/**
 * Created by BikeBoy on 2017/4/17.
 */
public class YyRegisterMdl {
    private int id;
    private int userId;
    private String registerDate;
    private String registerTime;
    private int rptType;
    private String workInfo;
    private String workAddr;
    private String remarks;
    private int rptFlg;
    private int stood;
    private int registerCount;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getRegisterDate() {
        return registerDate;
    }

    public void setRegisterDate(String registerDate) {
        this.registerDate = registerDate;
    }

    public String getRegisterTime() {
        return registerTime;
    }

    public void setRegisterTime(String registerTime) {
        this.registerTime = registerTime;
    }

    public int getRptType() {
        return rptType;
    }

    public void setRptType(int rptType) {
        this.rptType = rptType;
    }

    public String getWorkInfo() {
        return workInfo;
    }

    public void setWorkInfo(String workInfo) {
        this.workInfo = workInfo;
    }

    public String getWorkAddr() {
        return workAddr;
    }

    public void setWorkAddr(String workAddr) {
        this.workAddr = workAddr;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public int getRptFlg() {
        return rptFlg;
    }

    public void setRptFlg(int rptFlg) {
        this.rptFlg = rptFlg;
    }

    public int getStood() {
        return stood;
    }

    public void setStood(int stood) {
        this.stood = stood;
    }

    public int getRegisterCount() {
        return registerCount;
    }

    public void setRegisterCount(int registerCount) {
        this.registerCount = registerCount;
    }
}
