package com.future.borderland.dao;


import com.future.borderland.entity.Member;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Created by jiangyunfan on 2018/11/20.
 */
public interface IMemberRepository extends CrudRepository<Member, Long> {

//    @Query(value = "SELECT o FROM Member o ORDER BY o.memberId")
//    Page<Member> findAllAdminsWithPagination(Pageable pageable);

    Member findMemberByMemberIdAndActive(Long memberId, boolean isGuest);

    Member findMemberByMemberId(Long memberId);

    Optional<Member> findByMemberName(String memberName);

    Member findMemberByMemberMailAddress(String memberMailAddress);



}
