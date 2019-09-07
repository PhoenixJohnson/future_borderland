package com.future.borderland.manager;

import com.future.borderland.dao.dalinterface.IMemberRepository;
import com.future.borderland.entity.Member;
import com.future.borderland.exception.FBSiteErrorCode;
import com.future.borderland.exception.FBSiteException;
import com.future.borderland.pojo.api.request.MemberResourceRequest;
import com.future.borderland.pojo.api.response.MemberResourceResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * Created by jiangyunfan on 2019/9/7.
 */
@Component
public class MemberFactoryManager {

    @Autowired
    private IMemberRepository memberRepository;

    public MemberResourceResponse preCheckMember(MemberResourceRequest resourceRequest) throws FBSiteException {

        MemberResourceResponse resourceResponse = new MemberResourceResponse();
        Member member;
        member = memberRepository.findMemberByMemberName(resourceRequest.getMemberName());
        if(member == null) {
            member = new Member();
            member.setIsGuest(true);
            member.setMemberName(resourceRequest.getMemberName());
            member.setMemberMailAddress(resourceRequest.getMemberMailAddress());
            member.setCreationDate(new Date());
            member.setLastModifiedDate(new Date());
            //For the first one, set -1 score so that front end knows that he is the new one.
            member.setRankScore(-1D);
            try {
                memberRepository.save(member);
            } catch (Exception e) {
                throw new FBSiteException(FBSiteErrorCode.DB_EXCEPTION, "Reaching DB issue, please try again later");
            }
        }
        resourceResponse.setIsGuest(member.getIsGuest());
        resourceResponse.setLastRankScore(member.getRankScore());
        resourceResponse.setTestResult(member.getTestResult());

        return resourceResponse;
    }

}
