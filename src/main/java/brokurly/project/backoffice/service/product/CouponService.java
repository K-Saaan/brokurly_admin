package brokurly.project.backoffice.service.product;

import brokurly.project.backoffice.dto.product.CouponDto;
import brokurly.project.backoffice.entity.product.CouponEntity;
import org.springframework.data.jpa.domain.Specification;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface CouponService {
    Specification<CouponEntity> getByCpnCode(String cpnCode); // 조회조건 쿠폰코드
    Specification<CouponEntity> getByCpnNm(String cpnNm); // 조회조건 쿠폰명
    public int modCpn(String cpnCode, CouponDto couponDto, HttpServletRequest request); // 쿠폰 수정 처리
    public int deleteCpnPd(List<Object> param); // 쿠폰 등록상품 삭제
}
