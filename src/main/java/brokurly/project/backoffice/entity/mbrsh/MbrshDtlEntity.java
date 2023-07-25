package brokurly.project.backoffice.entity.mbrsh;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 아무런 값도 갖지 않는 의미 없는 객체의 생성을 막아줌
@Table(name = "mbrsh_dtl", catalog = "cs")
public class MbrshDtlEntity {
    @Id
    @Column(name = "MBRSH_GRADE")
    private String mbrshGrade;
    @Column(name = "MBRSH_GRADE_NM")
    private String mbrshGradeNm;
    @Column(name = "BM_RSLT", precision = 22, scale = 2)
    private BigDecimal bmRslt;
    @Column(name = "CPN_CNT", precision = 10, scale = 0)
    private BigDecimal cpnCnt;
    @Column(name = "RESERVE_RATIO", precision = 10, scale = 0)
    private BigDecimal reserveRatio;
    @Column(name = "DOUBLE_RESERVE")
    private String doubleReserve;
    @Column(name = "EXT_BEFIT")
    private String extBefit;
    @Column(name = "EXT_GIFT")
    private String extGift;
    @Column(name = "REG_ID")
    private String regId;
    @Column(name = "REG_DATE")
    private LocalDateTime regDate;
    @Column(name = "CHGR_ID")
    private String chgrId;
    @Column(name = "CHGR_DATE")
    private LocalDateTime chgrDate;
}
