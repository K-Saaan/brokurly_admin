package brokurly.project.backoffice.service.order.impl;

import brokurly.project.backoffice.common.Consts;
import brokurly.project.backoffice.dto.order.OrderDto;
import brokurly.project.backoffice.entity.order.OrderDtlEntity;
import brokurly.project.backoffice.entity.order.OrderEntity;
import brokurly.project.backoffice.entity.product.CouponHistEntity;
import brokurly.project.backoffice.repository.order.OrderDtlRepository;
import brokurly.project.backoffice.repository.order.OrderRepository;
import brokurly.project.backoffice.repository.product.CouponHistRepository;
import brokurly.project.backoffice.service.common.SequenceService;
import brokurly.project.backoffice.service.order.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Transactional
    public int addOrder(OrderDto orderDto, HttpServletRequest request) {
        HttpSession session = request.getSession();
        String regId = (String) session.getAttribute("mngId");
        LocalDateTime now = LocalDateTime.now();

        String orderCode = sequenceService.createNewSequence(Consts.TBL_CODE.OD_INFO, 10);
        // od.OD_INFO에 들어갈 사항들
//            logger.info("========================================");
//            logger.info("od.OD_INFO");
//            logger.info("주문코드 : " + orderCode);
//            logger.info("주문고객코드 : " + orderDto.getCustCode());
//            logger.info("주문날짜 : " + orderDto.getOdDate());
//            logger.info("주문상태 : " + orderDto.getOdState());
//            logger.info("납부상태 : " + orderDto.getPayState());
//            logger.info("배송지코드 : " + orderDto.getDeliLocCode());
//            logger.info("수령인 : " + orderDto.getReveNm());
//            logger.info("수령인 전화번호 : " + orderDto.getReveTelNo());
//            logger.info("수령장소 : " + orderDto.getRevePlace());
//            logger.info("수령장소 상세정보 : " + orderDto.getRevePlaceDtl());
//            logger.info("배송관련정보 : " + orderDto.getDeliComMsg());
//            logger.info("총결제금액 : " + orderDto.getTotPayAmt());
//            logger.info("총주문금액 : " + orderDto.getTotOdAmt());
//            logger.info("쿠폰할인금액 : " + orderDto.getCpnDiscAmt());
//            logger.info("상품할인금액 : " + orderDto.getPdDiscAmt());
//            logger.info("총할인금액 : " + orderDto.getTotDiscAmt());
//            logger.info("배송비 : " + orderDto.getDeliPrice());
//            logger.info("적립예정금액 : " + orderDto.getTobeReserve());
//            logger.info("등록자 : " + regId);
//            logger.info("등록일시 : " + now);

        OrderEntity orderEntity = OrderEntity.builder().odCode(orderCode).custCode(orderDto.getCustCode())
                .odDate(orderDto.getOdDate()).odState(orderDto.getOdState()).payState(orderDto.getPayState())
                .deliLocCode(orderDto.getDeliLocCode()).reveNm(orderDto.getReveNm())
                .reveTelno(orderDto.getReveTelNo()).revePlace(orderDto.getRevePlace())
                .revePlaceDtl(orderDto.getRevePlaceDtl()).deliComMsg(orderDto.getDeliComMsg())
                .totPayAmt(orderDto.getTotPayAmt()).totOdAmt(orderDto.getTotOdAmt())
                .cpnDiscAmt(orderDto.getCpnDiscAmt()).pdDiscAmt(orderDto.getPdDiscAmt())
                .totDiscAmt(orderDto.getTotDiscAmt()).deliPrice(orderDto.getDeliPrice())
                .tobeReserve(orderDto.getTobeReserve()).reserveYn("N").regId(regId).regDate(now).build();
        orderRepository.save(orderEntity);

        // od.OD_INFO_DTL에 들어갈 사항들
//            logger.info("========================================");
//            logger.info("od.OD_INFO_DTL");
//            logger.info("상품코드 배열 : " + orderDto.getPdCode().toString());
//            logger.info("상품개수 배열 : " + orderDto.getPdCount().toString());
//            logger.info("상품옵션코드 : " + orderDto.getPdOptCode().toString());
//            logger.info("상품별 할인금액 배열 : " + orderDto.getPdDiscAmtDtl().toString());
//            logger.info("상품별 쿠폰할인금액 배열 : " + orderDto.getCpnDiscAmtDtl().toString());
//            logger.info("상품별 쿠폰코드 배열 : " + orderDto.getCpnCode().toString());

        List<String> pdCode = orderDto.getPdCode();
        List<String> pdCount = orderDto.getPdCount();
        List<String> pdOptCode = orderDto.getPdOptCode();
        List<String> pdDiscAmtDtl = orderDto.getPdDiscAmtDtl();
        List<String> cpnDiscAmtDtl = orderDto.getCpnDiscAmtDtl();
        List<String> cpnCode = orderDto.getCpnCode();
        for(int i = 0; i< pdCode.size(); i++) {
            OrderDtlEntity orderDtlEntity = OrderDtlEntity.builder()
                    .odCode(orderCode).pdCode(pdCode.get(i))
                    .pdCnt(pdCount.get(i)).pdOptCode(pdOptCode.get(i))
                    .pdDiscAmt(pdDiscAmtDtl.get(i)).cpnCode(cpnCode.get(i))
                    .cpnDiscAmt(cpnDiscAmtDtl.get(i)).build();
            orderDtlRepository.save(orderDtlEntity);
        }

        // pd.CPN_HIST에 들어갈 사항들
//            logger.info("========================================");
//            logger.info("pd.CPN_HIST");
//            logger.info("주문고객코드 : " + orderDto.getCustCode());
//            logger.info("상품별 쿠폰코드 배열 : " + orderDto.getCpnCode().toString());
//            logger.info("쿠폰 상태 : " + "40");
//            logger.info("쿠폰 사용날짜 : " + now);
//            logger.info("상품별 쿠폰할인금액 배열 : " + orderDto.getCpnDiscAmtDtl().toString());
//            logger.info("등록자 : " + regId);
//            logger.info("등록일시 : " + now);

        for(int i = 0; i< pdCode.size(); i++) {
            if(cpnCode.get(i) != "") {
//                            CouponHistEntity couponHistEntity = CouponHistEntity.builder()
//                                    .custCode(orderDto.getCustCode()).cpnCode(cpnCode.get(i))
//                                    .cpnStat("40").cpnUseDate(orderDto.getCpnUseDate())
//                                    .cpnUseAmt(cpnDiscAmtDtl.get(i))
//                                    .chgrId(regId).chgrDate(now).build();
//                            couponHistRepository.save(couponHistEntity);
                CouponHistEntity couponHistEntity = couponHistRepository.findByCustCodeAndCpnCode(orderDto.getCustCode(), cpnCode.get(i));
                couponHistEntity.updateCpnHist("40", orderDto.getCpnUseDate(),
                        cpnDiscAmtDtl.get(i), regId, now);
            }
        }
        return 1;
    }
}
