package brokurly.project.backoffice.entity.member;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 아무런 값도 갖지 않는 의미 없는 객체의 생성을 막아줌
@Table(name = "reserve_amt_info", catalog = "cs")
public class ReserveAmtInfoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "RESERVE_SEQ_NO")
    private int reserveSeqNo;
    @Column(name = "CUST_CODE")
    private String custCode;
    @Column(name = "RESERVE_TYP")
    private String reserveTyp;
    @Column(name = "RESERVE_DT")
    private String reserveDt;
    @Column(name = "RESERVE_AMT")
    private Double reserveAmt;
    @Column(name = "RESERVE_DESC")
    private String reserveDesc;
    @Column(name = "REG_ID")
    private String regId;
    @Column(name = "REG_DATE")
    private LocalDateTime regDate;
    @Column(name = "CHGR_ID")
    private String chgrId;
    @Column(name = "CHGR_DATE")
    private LocalDateTime chgrDate;
}
