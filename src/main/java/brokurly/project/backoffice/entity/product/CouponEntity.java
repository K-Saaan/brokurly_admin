package brokurly.project.backoffice.entity.product;

import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.text.DecimalFormat;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "cpn_info", catalog="pd")
public class CouponEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CPN_CODE")
    private String cpnCode;
    @Column(name = "CPN_GUBUN")
    private String cpnGubun;
    @Column(name = "CPN_NM")
    private String cpnNm;
    @Column(name = "CPN_STAT")
    private String cpnStat;
    @Column(name = "CREATE_DATE")
    private String createDate;
    @Column(name = "CPN_PRICE")
    private String cpnPrice;
    @Column(name = "CPN_RATIO")
    private String cpnRatio;
    @Column(name = "MAX_AMT")
    private String maxAmt;
    @Column(name = "DTL_DESC")
    private String dtlDesc;
    @Column(name = "USE_REQ")
    private String useReq;
    @Column(name = "REG_ID")
    private String regId;
    @Column(name = "REG_DATE")
    private Timestamp regDate;
    @Column(name = "CHGR_ID")
    private String chgrId;
    @Column(name = "CHGR_DATE")
    private Timestamp chgrDate;
}
