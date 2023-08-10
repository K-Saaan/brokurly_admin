package brokurly.project.backoffice.entity.billing;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "chrg_info", catalog="bl")
public class ChrgInfoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CHGR_SEQ_NO")
    private int chgrSeqNo;
    @Column(name = "PYM_ACNT_CODE")
    private String pymAcntCode;
    @Column(name = "CUST_CODE")
    private String custCode;
    @Column(name = "OD_CODE")
    private String odCode;
    @Column(name = "PYM_TYP")
    private String pymTyp;
    @Column(name = "PAY_WAY")
    private String payWay;
    @Column(name = "PAY_STAT")
    private String payStat;
    @Column(name = "CNCL_YN")
    private String cnclYn;
    @Column(name = "CHRG_DATE")
    private LocalDateTime chrgDate;
    @Column(name = "BANK_CD")
    private String bankCd;
    @Column(name = "BANK_NM")
    private String bankNm;
    @Column(name = "CARD_NO")
    private String cardNo;
    @Column(name = "CARD_DUE_YY")
    private String cardDueYy;
    @Column(name = "CARD_DUE_MM")
    private String cardDueMm;
    @Column(name = "ACNT_NO")
    private String acntNo;
    @Column(name = "ACNT_HOLDER")
    private String acntHolder;
    @Column(name = "CHRG_AMT")
    private Double chrgAmt;
    @Column(name = "VAT")
    private Double vat;
    @Column(name = "FEE")
    private Double fee;
    @Column(name = "REG_ID")
    private String regId;
    @Column(name = "REG_DATE")
    private LocalDateTime regDate;
    @Column(name = "CHGR_ID")
    private String chgrId;
    @Column(name = "CHGR_DATE")
    private LocalDateTime chgrDate;
}
