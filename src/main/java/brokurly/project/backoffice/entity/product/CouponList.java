package brokurly.project.backoffice.entity.product;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@AllArgsConstructor
@ToString
@Builder
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Embeddable
public class CouponList implements Serializable {
    @Column(name = "CPN_CODE")
    private String cpnCode;
    @Column(name = "PD_CODE")
    private String pdCode;
}
