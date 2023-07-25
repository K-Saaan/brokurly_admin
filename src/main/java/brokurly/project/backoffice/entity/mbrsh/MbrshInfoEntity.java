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
@Table(name = "mbrsh_info", catalog = "cs")
public class MbrshInfoEntity {
    @Id
    @Column(name = "CUST_CODE")
    private String custCode;
    @Column(name = "STD_DT")
    private String stdDt;
    @Column(name = "CURR_MBRSH_GRADE")
    private String currMbrshGrade;
    @Column(name = "BM_RSLT", precision = 22, scale = 2)
    private BigDecimal bmRslt;
    @Column(name = "NXT_MBRSH_GRADE")
    private String nxtMbrshGrade;
    @Column(name = "REG_ID")
    private String regId;
    @Column(name = "REG_DATE")
    private LocalDateTime regDate;
    @Column(name = "CHGR_ID")
    private String chgrId;
    @Column(name = "CHGR_DATE")
    private LocalDateTime chgrDate;
}
