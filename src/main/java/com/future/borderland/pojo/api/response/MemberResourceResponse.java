package com.future.borderland.pojo.api.response;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by jiangyunfan on 2019/9/7.
 */
@Setter
@Getter
public class MemberResourceResponse {

    private Boolean isGuest;
    private String testResult;
    private Double lastRankScore;
}
