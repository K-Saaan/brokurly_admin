package brokurly.project.backoffice.entity.product;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "cate_info", catalog="pd")
public class CateInfoEntity {
    @Id
    @Column(name = "CATE_CODE")
    private String cateCode;
    @Column(name = "UPPER_CATE_CODE")
    private String upperCateCode;
    @Column(name = "CATE_NM")
    private String cateNm;
}
