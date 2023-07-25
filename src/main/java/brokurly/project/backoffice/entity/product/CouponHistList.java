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
public class CouponHistList implements Serializable {
    @Column(name = "CUST_CODE")
    private String custCode;
    @Column(name = "CPN_CODE")
    private String cpnCode;
}
