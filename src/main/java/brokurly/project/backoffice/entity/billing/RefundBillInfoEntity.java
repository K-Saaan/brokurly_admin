package brokurly.project.backoffice.entity.billing;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "refund_bill_info", catalog="bl")
public class RefundBillInfoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RFND_SEQ_NO")
    private int rfndSeqNo;
    @Column(name = "PYM_ACNT_CODE")
    private String pymAnctCode;
    @Column(name = "OD_CODE")
    private String odCode;
    @Column(name = "PROD_CD")
    private String prodCd;
    @Column(name = "RFND_TYP")
    private String rfndTyp;
    @Column(name = "RFND_CNCL_YN")
    private String rfndCnclYn;
    @Column(name = "BANK_CD")
    private String bankCd;
    @Column(name = "BANK_NM")
    private String bankNm;
    @Column(name = "ACNT_NO")
    private String acntNo;
    @Column(name = "ACNT_HOLDER")
    private String acntHolder;
    @Column(name = "RFND_YN")
    private String acntYn;
    @Column(name = "RCPT_AMT")
    private Double rcptAmt;
    @Column(name = "RFND_AMT")
    private Double rfndAmt;
    @Column(name = "REG_ID")
    private String regId;
    @Column(name = "REG_DATE")
    private LocalDateTime regDate;
    @Column(name = "CHGR_ID")
    private String chgrId;
    @Column(name = "CHGR_DATE")
    private LocalDateTime chgrDate;
}
