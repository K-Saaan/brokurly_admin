package brokurly.project.backoffice.service.product;

import brokurly.project.backoffice.entity.product.CouponEntity;
import org.springframework.data.jpa.domain.Specification;

public interface CouponService {
    Specification<CouponEntity> getByCpnCode(String cpnCode); // 조회조건 쿠폰코드
    Specification<CouponEntity> getByCpnNm(String cpnNm); // 조회조건 쿠폰명
}
