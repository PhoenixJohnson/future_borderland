package com.future.borderland.dao.dalinterface;

import com.future.borderland.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Created by jiangyunfan on 2018/11/20.
 */
@Component
public interface IMemberRepository extends CrudRepository<Member, Long> {

    @Query(value = "SELECT o FROM Member o ORDER BY o.memberId")
    Page<Member> findAllAdminsWithPagination(Pageable pageable);

    Member findMemberByMemberIdAndIsGuest(Long memberId, boolean isGuest);

    Member findMemberByMemberId(Long memberId);

    List<Member> findAll();

    Member findMemberByMemberName(String memberName);

    Member findMemberByMemberMailAddress(String memberMailAddress);

    int countAll();


}
