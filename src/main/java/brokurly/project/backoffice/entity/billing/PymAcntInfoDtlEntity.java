package brokurly.project.backoffice.entity.billing;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "pym_acnt_info_dtl", catalog="cs")
public class PymAcntInfoDtlEntity {
    @Id
    @Column(name = "PYM_ACNT_CODE")
    private String pymAcntCode;
    @Column(name = "AGRE_TERMS")
    private String agreTerms;
    @Column(name = "AGRE_PRIVACY_ESS")
    private String agrePrivacyEss;
    @Column(name = "AGRE_PRIVACY_OPT")
    private String agrePrivacyOpt;
    @Column(name = "AGRE_SMS")
    private String agreSms;
    @Column(name = "AGRE_EMAIL")
    private String agreEmail;
    @Column(name = "AGE_YN")
    private String ageYn;
    @Column(name = "REG_ID")
    private String regId;
    @Column(name = "REG_DATE")
    private LocalDateTime regDate;
    @Column(name = "CHGR_ID")
    private String chgrId;
    @Column(name = "CHGR_DATE")
    private LocalDateTime chgrDate;
}
