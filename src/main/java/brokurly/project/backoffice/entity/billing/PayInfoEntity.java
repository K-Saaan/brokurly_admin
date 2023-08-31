package brokurly.project.backoffice.entity.billing;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "pay_info", catalog="bl")
public class PayInfoEntity {
    @Id
    @Column(name = "CHRG_SEQ_NO")
    private int chrgSeqNo;
    @Column(name = "PAY_STAT")
    private String payStat;
    @Column(name = "PAY_CNCL_YN")
    private String payCnclYn;
    @Column(name = "PAY_DATE")
    private LocalDateTime payDate;
    @Column(name = "FULL_PAY_YN")
    private String fullPayYn;
    @Column(name = "PAY_PROC_YN")
    private String payProcYn;
    @Column(name = "PAY_PROC_DATE")
    private LocalDateTime payProcDate;
    @Column(name = "CHRG_AMT")
    private Double chrgAmt;
    @Column(name = "RCPT_AMT")
    private Double rcptAmt;
    @Column(name = "REG_ID")
    private String regId;
    @Column(name = "REG_DATE")
    private LocalDateTime regDate;
    @Column(name = "CHGR_ID")
    private String chgrId;
    @Column(name = "CHGR_DATE")
    private LocalDateTime chgrDate;
}
