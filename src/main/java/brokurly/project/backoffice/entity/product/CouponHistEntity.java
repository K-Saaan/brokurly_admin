package brokurly.project.backoffice.entity.product;

import lombok.*;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Entity
//@Builder
//@AllArgsConstructor
@IdClass(CustCouponList.class)
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 아무런 값도 갖지 않는 의미 없는 객체의 생성을 막아줌
@Table(name = "cpn_hist", catalog = "pd")
public class CouponHistEntity implements Serializable {
    @Id
    @Column(name = "CUST_CODE")
    private String custCode;
    @Id
    @Column(name = "CPN_CODE")
    private String cpnCode;
    @Column(name = "CPN_STAT")
    private String cpnStat;
    @Column(name = "ISSUED_DATE")
    private String issuedDate;
    @Column(name = "CPN_USE_DATE")
    private String cpnUseDate;
    @Column(name = "CPN_USE_AMT")
    private String cpnUseAmt;
    @Column(name = "REG_ID")
    private String regId;
    @Column(name = "REG_DATE")
    private LocalDateTime regDate;
    @Column(name = "CHGR_ID")
    private String chgrId;
    @Column(name = "CHGR_DATE")
    private LocalDateTime chgrDate;

    @Builder
    public CouponHistEntity(String custCode, String cpnCode, String cpnStat,
                            String cpnUseDate, String cpnUseAmt,
                            String chgrId, LocalDateTime chgrDate) {
        this.custCode = custCode;
        this.cpnCode = cpnCode;
        this.cpnStat = cpnStat;
        this.cpnUseDate = cpnUseDate;
        this.cpnUseAmt = cpnUseAmt;
        this.chgrId = chgrId;
        this.chgrDate = chgrDate;
    }

    @Transactional
    public void updateCpnHist(String cpnStat,
                              String cpnUseDate, String cpnUseAmt,
                              String chgrId, LocalDateTime chgrDate) {
        this.cpnStat = cpnStat;
        this.cpnUseDate = cpnUseDate;
        this.cpnUseAmt = cpnUseAmt;
        this.chgrId = chgrId;
        this.chgrDate = chgrDate;
    }
}
