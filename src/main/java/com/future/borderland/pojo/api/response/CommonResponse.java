package com.future.borderland.pojo.api.response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * Created by jiangyunfan on 2018/11/22.
 */
@Setter
@Getter
public class CommonResponse {

    private Boolean success;
    private Boolean redirect;
    private String shortMessage;
    private Object responseObj;
    private List<?> responseObjList;
    private Boolean production;
    private Integer count;

}
