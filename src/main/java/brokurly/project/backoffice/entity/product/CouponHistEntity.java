package brokurly.project.backoffice.entity.product;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Entity
@Builder
@AllArgsConstructor
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
    @Column(name = "CPN_USED_PRICE")
    private String cpnUsedPrice;
    @Column(name = "REG_ID")
    private String regId;
    @Column(name = "REG_DATE")
    private LocalDateTime regDate;
    @Column(name = "CHGR_ID")
    private String chgrId;
    @Column(name = "CHGR_DATE")
    private LocalDateTime chgrDate;
}
