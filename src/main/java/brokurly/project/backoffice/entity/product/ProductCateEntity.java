package brokurly.project.backoffice.entity.product;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "pd_cate", catalog="pd")
public class ProductCateEntity {
    @Id
    @Column(name = "PD_CODE")
    private String pdCode;
    @Column(name = "CATE_CODE")
    private String cateCode;
    @Column(name = "CATE_NM")
    private String cateNm;
    @Column(name = "USE_YN")
    private String useYn;
    @Column(name = "REG_ID")
    private String regId;
    @Column(name = "REG_DATE")
    private LocalDateTime regDate;
    @Column(name = "CHGR_ID")
    private String chgrId;
    @Column(name = "CHGR_DATE")
    private LocalDateTime chgrDate;
}
