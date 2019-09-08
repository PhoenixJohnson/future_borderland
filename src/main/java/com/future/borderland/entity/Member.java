package com.future.borderland.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.util.Date;

/**
 * Created by jiangyunfan on 2019/9/7.
 */
@Setter
@Getter
@Entity
@Table(schema="future_borderland", name = "Member", indexes = {
        @Index(name = "fb_member_id_index", columnList = "memberId"),
        @Index(name = "fb_member_name_index", columnList = "memberName"),
        @Index(name = "fb_member_mail_address_index", columnList = "memberMailAddress")
})
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "MemberId_seq")
    @SequenceGenerator(name = "MemberId_seq", allocationSize = 1, initialValue = 5000000, sequenceName = "MemberId_seq")
    @Column( nullable = false, insertable = false, updatable = false)
    private Long memberId;

    @Min(0)
    @Max(2)
    @Column(columnDefinition = "TINYINT(1) default '0'")
    private int active;

    @Column(unique = true, length = 512)
    private String memberName;

    @Column(length = 512)
    private String memberMailAddress;

    @Column(length = 1024)
    private String password;

    @Column(length = 4096)
    private String testResult;

    @Column( precision = 4, scale = 2)
    private Double rankScore;

    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private Date creationDate;

    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    @Column(nullable = false)
    private Date lastModifiedDate;

}
