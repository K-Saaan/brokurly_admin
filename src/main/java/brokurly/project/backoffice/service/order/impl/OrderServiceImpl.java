package brokurly.project.backoffice.service.order.impl;

import brokurly.project.backoffice.common.Consts;
import brokurly.project.backoffice.dto.order.OrderDto;
import brokurly.project.backoffice.entity.billing.ChrgInfoEntity;
import brokurly.project.backoffice.entity.billing.PayInfoEntity;
import brokurly.project.backoffice.entity.billing.PymAcntInfoDtlEntity;
import brokurly.project.backoffice.entity.billing.PymAcntInfoEntity;
import brokurly.project.backoffice.entity.order.OrderDtlEntity;
import brokurly.project.backoffice.entity.order.OrderEntity;
import brokurly.project.backoffice.entity.product.CouponHistEntity;
import brokurly.project.backoffice.repository.billing.ChrgInfoRepository;
import brokurly.project.backoffice.repository.billing.PayInfoRepository;
import brokurly.project.backoffice.repository.billing.PymAcntInfoDtlRepository;
import brokurly.project.backoffice.repository.billing.PymAcntInfoRepository;
import brokurly.project.backoffice.repository.order.OrderDtlRepository;
import brokurly.project.backoffice.repository.order.OrderRepository;
import brokurly.project.backoffice.repository.product.CouponHistRepository;
import brokurly.project.backoffice.service.common.SequenceService;
import brokurly.project.backoffice.service.order.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {
    private  final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private SequenceService sequenceService;
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderDtlRepository orderDtlRepository;
    @Autowired
    private CouponHistRepository couponHistRepository;
    @Autowired
    private PymAcntInfoRepository pymAcntInfoRepository;
    @Autowired
    private PymAcntInfoDtlRepository pymAcntInfoDtlRepository;
    @Autowired
    private ChrgInfoRepository chrgInfoRepository;
    @Autowired
    private PayInfoRepository payInfoRepository;

    @Transactional
    public int addOrder(OrderDto orderDto, HttpServletRequest request) {
        HttpSession session = request.getSession();
        String regId = (String) session.getAttribute("mngId");
        LocalDateTime now = LocalDateTime.now();

        String orderCode = sequenceService.createNewSequence(Consts.TBL_CODE.OD_INFO, 10);

        // 주문 정보 테이블
        OrderEntity orderEntity = OrderEntity.builder().odCode(orderCode).custCode(orderDto.getCustCode())
                .odDate(orderDto.getOdDate()).odState(orderDto.getOdState()).payState(orderDto.getPayState())
                .deliLocCode(orderDto.getDeliLocCode()).reveNm(orderDto.getReveNm())
                .reveTelno(orderDto.getReveTelNo()).revePlace(orderDto.getRevePlace())
                .revePlaceDtl(orderDto.getRevePlaceDtl()).deliComMsg(orderDto.getDeliComMsg())
                .totPayAmt(orderDto.getTotPayAmt()).totOdAmt(orderDto.getTotOdAmt())
                .cpnDiscAmt(orderDto.getCpnDiscAmt()).pdDiscAmt(orderDto.getPdDiscAmt()).usedReserveAmt(orderDto.getUsedReservedAmt())
                .totDiscAmt(orderDto.getTotDiscAmt()).deliPrice(orderDto.getDeliPrice())
                .tobeReserve(orderDto.getTobeReserve()).reserveYn("N").regId(regId).regDate(now).build();
        orderRepository.save(orderEntity);

        // 주문 상세정보 테이블
        List<String> pdCode = orderDto.getPdCode();
        List<String> pdCount = orderDto.getPdCount();
        List<String> pdOptCode = orderDto.getPdOptCode();
        List<Double> pdDiscAmtDtl = orderDto.getPdDiscAmtDtl();
        List<Double> cpnDiscAmtDtl = orderDto.getCpnDiscAmtDtl();
        List<String> cpnCode = orderDto.getCpnCode();
        for(int i = 0; i< pdCode.size(); i++) {
            OrderDtlEntity orderDtlEntity = OrderDtlEntity.builder()
                    .odCode(orderCode).pdCode(pdCode.get(i))
                    .pdCnt(pdCount.get(i)).pdOptCode(pdOptCode.get(i))
                    .pdDiscAmt(pdDiscAmtDtl.get(i)).cpnCode(cpnCode.get(i))
                    .cpnDiscAmt(cpnDiscAmtDtl.get(i)).build();
            orderDtlRepository.save(orderDtlEntity);
        }

        // 쿠폰 이력 테이블
        for(int i = 0; i< pdCode.size(); i++) {
            if(cpnCode.get(i) != "") {
                CouponHistEntity couponHistEntity = couponHistRepository.findByCustCodeAndCpnCode(orderDto.getCustCode(), cpnCode.get(i));

                Double cpnUseAmt = 0.0; // cpn_hist 테이블에 해당 고객+쿠폰의 쿠폰사용금액 정보 가져온값
                if(couponHistEntity.getCpnUseAmt() != null) { // 널이 아니라면 값 가져오고 널이면 그대로 0
                    cpnUseAmt = couponHistEntity.getCpnUseAmt();
                }
                Double nowCpnUseAmt = cpnDiscAmtDtl.get(i); // 이건 이번에 넣는 쿠폰 사용금액
                Double totalCpnUseAmt = cpnUseAmt + nowCpnUseAmt; // 기존 누적금액에서 이번 금액 합산
                couponHistEntity.updateCpnHist("40", orderDto.getCpnUseDate(), totalCpnUseAmt, regId, now);
            }
        }

        // 납부자 테이블
        String pymAcntCode = sequenceService.createNewSequence(Consts.TBL_CODE.PYM_INFO, 10);
        PymAcntInfoEntity pymAcntInfoEntity = PymAcntInfoEntity.builder().pymAcntCode(pymAcntCode)
                .custCode(orderDto.getCustCode()).pymAcntNm(orderDto.getPayAcntNm())
                .pymAcntTel(orderDto.getPayAcntTel()).pymAcntEmail(orderDto.getPayAcntEmail())
                .pymAcntBirth(orderDto.getPayAcntBirth()).payWay(orderDto.getPayWay())
                .bankNm(orderDto.getBankNm()).acntHolder(orderDto.getAcntHolder())
                .acntNo(orderDto.getAcntNo()).cardExpDt(orderDto.getCardExpDt())
                .chrgDate(now).installYn(orderDto.getInstallYn()).installM(orderDto.getInstallM())
                .virtualAcntNo(orderDto.getVirtualAcntNo()).regId(regId).regDate(now).build();
        pymAcntInfoRepository.save(pymAcntInfoEntity);

        // 납부자 세부 테이블
        PymAcntInfoDtlEntity pymAcntInfoDtlEntity = PymAcntInfoDtlEntity.builder()
                .pymAcntCode(pymAcntCode).agreTerms(orderDto.getAgreTerms()).agrePrivacyEss(orderDto.getAgrePrivacyEss())
                .agrePrivacyOpt(orderDto.getAgrePrivacyOpt()).agreSms(orderDto.getAgreSms())
                .agreEmail(orderDto.getAgreEmail()).ageYn(orderDto.getAgeYn())
                .regId(regId).regDate(now).build();
        pymAcntInfoDtlRepository.save(pymAcntInfoDtlEntity);

        // 결제 정보 테이블
        ChrgInfoEntity chrgInfoEntity = ChrgInfoEntity.builder().pymAcntCode(pymAcntCode)
                .custCode(orderDto.getCustCode()).odCode(orderCode).pymTyp("1")
                .payWay(orderDto.getPayWay()).payStat("10").cnclYn("N")
                .chrgDate(now).bankCd(orderDto.getBankCd()).bankNm(orderDto.getBankNm())
                .cardNo(orderDto.getCardNo()).cardDueYy(orderDto.getCardDueYy())
                .cardDueMm(orderDto.getCardDueMm()).acntNo(orderDto.getAcntNo())
                .acntHolder(orderDto.getAcntHolder()).chrgAmt(orderDto.getTotPayAmt())
                .vat(orderDto.getVat()).fee(100.0).regId(regId).regDate(now).build();
        chrgInfoRepository.save(chrgInfoEntity);

        // 납부 정보 테이블
        PayInfoEntity payInfoEntity = PayInfoEntity.builder().chrgSeqNo(chrgInfoEntity.getChrgSeqNo())
                .payStat("10").payCnclYn("N").payDate(now).fullPayYn(orderDto.getFullPayYn()).payProcYn("N")
                .payProcDate(orderDto.getPayProcDate()).chrgAmt(orderDto.getTotPayAmt())
                .rcptAmt(orderDto.getRcptAmt()).instlMm(orderDto.getInstlMm())
                .regId(regId).regDate(now).build();
        payInfoRepository.save(payInfoEntity);

        return 1;
    }

    @Override
    public Specification<OrderEntity> getByOdCode(String odCode) {
        return ((root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("odCode"), "%" + odCode + "%"));
    }
}
