package brokurly.project.backoffice.entity.billing;

import lombok.*;

import javax.persistence.*;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "pym_acnt_info", catalog="cs")
public class PymAcntInfoEntity {
    @Id
    @Column(name = "PYM_ACNT_CODE")
    private String pymAcntCode;
    @Column(name = "CUST_CODE")
    private String custCode;
    @Column(name = "PYM_ACNT_NM")
    private String pymAcntNm;
    @Column(name = "PYM_ACNT_TEL")
    private String pymAcntTel;
    @Column(name = "PYM_ACNT_EMAIL")
    private String pymAcntEmail;
    @Column(name = "PYM_ACNT_BIRTH")
    private String pymAcntBirth;
    @Column(name = "PAY_WAY")
    private String payWay;
    @Column(name = "BANK_NM")
    private String bankNm;
    @Column(name = "ACNT_HOLDER")
    private String acntHolder;
    @Column(name = "ACNT_NO")
    private String acntNo;
    @Column(name = "CARD_EXP_DT")
    private String cardExpDt;
    @Column(name = "CHRG_DATE")
    private String chrgDate;
    @Column(name = "INSTALL_YN")
    private String installYn;
    @Column(name = "INSTALL_M")
    private String installM;
    @Column(name = "VIRTUAL_ACNT_NO")
    private String virtualAcntNo;
}
