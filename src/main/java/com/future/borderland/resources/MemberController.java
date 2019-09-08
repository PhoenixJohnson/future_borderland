package com.future.borderland.resources;

import com.future.borderland.manager.MemberFactoryManager;
import com.future.borderland.pojo.api.request.MemberResourceRequest;
import com.future.borderland.pojo.api.response.CommonResponse;
import com.future.borderland.pojo.api.response.ResponseBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


/**
 * Created by jiangyunfan on 2019/9/7.
 */
@RestController
@RequestMapping(value="/v1/member")
public class MemberController {


    @Autowired
    private MemberFactoryManager memberFactoryManager;

    @RequestMapping(value = "/pre-check", method = RequestMethod.POST, produces = "application/JSON", consumes = "application/JSON")
    public ResponseEntity<CommonResponse> preCheckMember(@RequestBody MemberResourceRequest request) {
        try {
            return new ResponseEntity<CommonResponse>(ResponseBuilder.buildResponseObj(memberFactoryManager.preCheckMember(request), true), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<CommonResponse>(ResponseBuilder.buildShortMessageResponse(e.getMessage(), false), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
