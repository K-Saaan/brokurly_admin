package brokurly.project.backoffice.entity.order;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "od_info", catalog="od")
public class OrderEntity {
    @Id
    @Column(name = "OD_CODE")
    private String odCode;
    @Column(name = "CUST_CODE")
    private String custCode;
    @Column(name = "OD_DATE")
    private String odDate;
    @Column(name = "OD_STATE")
    private String odState;
    @Column(name = "PAY_STATE")
    private String payState;
    @Column(name = "DELI_LOC_CODE")
    private String deliLocCode;
    @Column(name = "REVE_NM")
    private String reveNm;
    @Column(name = "REVE_TEL_NO")
    private String reveTelno;
    @Column(name = "REVE_PLACE")
    private String revePlace;
    @Column(name = "REVE_PLACE_DTL")
    private String revePlaceDtl;
    @Column(name = "DELI_COM_MSG")
    private String deliComMsg;
    @Column(name = "TOT_PAY_AMT")
    private Double totPayAmt;
    @Column(name = "TOT_OD_AMT")
    private Double totOdAmt;
    @Column(name = "CPN_DISC_AMT")
    private Double cpnDiscAmt;
    @Column(name = "PD_DISC_AMT")
    private Double pdDiscAmt;
    @Column(name = "USED_RESERVE_AMT")
    private Double usedReserveAmt;
    @Column(name = "TOT_DISC_AMT")
    private Double totDiscAmt;
    @Column(name = "DELI_PRICE")
    private Double deliPrice;
    @Column(name = "TOBE_RESERVE")
    private Double tobeReserve;
    @Column(name = "RESERVE_YN")
    private String reserveYn;
    @Column(name = "REG_ID")
    private String regId;
    @Column(name = "REG_DATE")
    private LocalDateTime regDate;
    @Column(name = "CHGR_ID")
    private String chgrId;
    @Column(name = "CHGR_DATE")
    private LocalDateTime chgrDate;

}
