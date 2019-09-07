package com.future.borderland.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by jiangyunfan on 2019/9/7.
 */
@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL)
@EntityListeners(AuditingEntityListener.class)
@Table(name = "FB_USER", indexes = {
        @Index(name = "fb_member_index", columnList = "memberId"),
        @Index(name = "fb_member_name_index", columnList = "memberName"),
        @Index(name = "fb_member_mail_address_index", columnList = "memberMailAddress")
})
@JsonIgnoreProperties(ignoreUnknown = true)
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "memberId_seq")
    @SequenceGenerator(name = "memberId_seq", allocationSize = 1, initialValue = 5000000, sequenceName = "memberId_seq")
    @Column(nullable = false, insertable = false, updatable = false)
    private Long memberId;

    @Column(nullable = false)
    private Boolean isGuest;

    @Column(length = 512)
    private String memberName;

    @Column(length = 512)
    private String memberMailAddress;

    @Column(length = 1024)
    private String password;

    @Column(length = 4096)
    private String testResult;

    @Column(precision = 4, scale = 2)
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
