package brokurly.project.backoffice.entity.product;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "disc_info", catalog="pd")
public class DiscInfoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DISC_CODE")
    private String discCode;
    @Column(name = "DISC_NM")
    private String discNm;
    @Column(name = "DISC_TYPE")
    private String discType;
    @Column(name = "DISC_STAT")
    private String discStat;
    @Column(name = "DISC_START_DT")
    private String discStartDt;
    @Column(name = "DISC_END_DATE")
    private String discEndDate;
    @Column(name = "DISC_PRICE")
    private String discPrice;
    @Column(name = "DISC_RATIO")
    private String discRatio;
    @Column(name = "REG_ID")
    private String regId;
    @Column(name = "REG_DATE")
    private LocalDateTime regDate;
    @Column(name = "CHGR_ID")
    private String chgrId;
    @Column(name = "CHGR_DATE")
    private LocalDateTime chgrDate;
}
