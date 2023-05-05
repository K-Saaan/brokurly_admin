package brokurly.project.backoffice.service.product.impl;

import brokurly.project.backoffice.dto.product.CouponDto;
import brokurly.project.backoffice.entity.product.CouponEntity;
import brokurly.project.backoffice.entity.product.QnaEntity;
import brokurly.project.backoffice.repository.product.CouponRepository;
import brokurly.project.backoffice.repository.product.QnaRepository;
import brokurly.project.backoffice.service.product.CouponService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;

@Service
public class CouponServiceImpl implements CouponService {
    private  final Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private CouponRepository couponRepository;

    // 쿠폰 조회 화면 조회조건
    // 쿠폰 코드 조회조건
    @Override
    public Specification<CouponEntity> getByCpnCode(String cpnCode) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("cpnCode"), "%" + cpnCode + "%");
    }
    // 쿠폰명 조회조건
    @Override
    public Specification<CouponEntity> getByCpnNm(String cpnNm) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("cpnNm"), "%" + cpnNm + "%");
    }
    // 쿠폰 수정 처리
    @Transactional
    public int modCpn(String cpnCode, CouponDto couponDto, HttpServletRequest request) {
        CouponEntity couponEntity = couponRepository.findById(cpnCode).orElseThrow(() -> new IllegalArgumentException("No data"));
        HttpSession session = request.getSession();
        String modId = (String)session.getAttribute("mngId");
        couponEntity.modCpn(couponDto.getCpnCode(), couponDto.getCpnGubun(), couponDto.getCpnNm(), couponDto.getCpnStat(), couponDto.getStartDate(),
                couponDto.getEndDate(), couponDto.getCpnPrice(), couponDto.getCpnRatio(), couponDto.getMinOdAmt(),
                couponDto.getMaxAmt(), couponDto.getDtlDesc(), couponDto.getUseReq(),
                modId, couponDto.getChgrDate());
        return 1;
    }
}
