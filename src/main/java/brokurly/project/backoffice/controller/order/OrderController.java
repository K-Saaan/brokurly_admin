package brokurly.project.backoffice.controller.order;

import brokurly.project.backoffice.common.Consts;
import brokurly.project.backoffice.dto.mbrsh.MbrshInfoDto;
import brokurly.project.backoffice.dto.member.ReserveAmtDto;
import brokurly.project.backoffice.dto.order.OrderDto;
import brokurly.project.backoffice.entity.order.DeliLocInfoEntity;
import brokurly.project.backoffice.entity.order.OrderDtlEntity;
import brokurly.project.backoffice.entity.order.OrderEntity;
import brokurly.project.backoffice.entity.product.CouponEntity;
import brokurly.project.backoffice.repository.mbrsh.MbrshInfoRepository;
import brokurly.project.backoffice.repository.member.MemberRepository;
import brokurly.project.backoffice.repository.order.DeliLocInfoRepository;
import brokurly.project.backoffice.repository.order.OrderDtlRepository;
import brokurly.project.backoffice.repository.order.OrderRepository;
import brokurly.project.backoffice.service.common.SequenceService;
import brokurly.project.backoffice.service.order.DeliLocInfoService;
import brokurly.project.backoffice.service.order.OrderService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/order")
public class OrderController {
    Logger logger = LoggerFactory.getLogger(this.getClass());

    private final DeliLocInfoRepository deliLocInfoRepository;
    private final MbrshInfoRepository mbrshInfoRepository;
    private final OrderRepository orderRepository;
    private final OrderDtlRepository orderDtlRepository;
    private final MemberRepository memberRepository;
    private final SequenceService sequenceService;
    private final DeliLocInfoService deliLocInfoService;
    private final OrderService orderService;

    @GetMapping("/regOrder")
    public String regOrder() {
        return "order/regOrder";
    }
    @GetMapping("/showOrder")
    public String showOrder() {
        return "order/showOrder";
    }

    // 쿠폰 등록 모달
    @GetMapping("/coupon/pdCoupon")
    public String addPdCpnInfo() {
        return "order/coupon/pdCoupon";
    }

    @ResponseBody
    @PostMapping(value = "/showDeliInfo", produces = "application/json;charset=utf-8")
    public Map<String, Object> showDeliInfo(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
        String custCode = (String)param.get("CUST_CODE");
        int pagingIndex = (int) param.get("pagingIndex");
        int pagingRows = (int) param.get("pagingRows");
        Specification<DeliLocInfoEntity> spec = (root, query, criteriaBuilder) -> null;
        Map<String, Object> result = new HashMap();
        if(custCode != "")  {
            spec = spec.and(deliLocInfoService.getByCustCode(custCode));
        }
        PageRequest page = PageRequest.of(pagingIndex, pagingRows);
        Page<DeliLocInfoEntity> specDeli = deliLocInfoRepository.findAll(spec, page);
        result.put("codeList", specDeli);
        return result;
    }

    @ResponseBody
    @PostMapping(value = "/addOrder", produces = "application/json;charset=utf-8")
    public int addOrder(@RequestBody OrderDto orderDto, HttpServletRequest request) throws Throwable {
        return orderService.addOrder(orderDto, request);
    }

    @ResponseBody
    @PostMapping(value = "/calcMbrshInfo", produces = "application/json;charset=utf-8")
    public Map<String, Object> calcMbrshInfo(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
        String custCode = (String)param.get("CUST_CODE");
        List<MbrshInfoDto> dataList = mbrshInfoRepository.calcMbrshInfo(custCode);
        Map<String, Object> result = new HashMap();
        result.put("codeList", dataList);
        return result;
    }

    @ResponseBody
    @PostMapping(value = "/showOwnReserveAmt", produces = "application/json;charset=utf-8")
    public Map<String, Object> showOwnReserveAmt(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
        String custCode = (String)param.get("CUST_CODE");
        List<ReserveAmtDto> dataList = memberRepository.showOwnReserveAmt(custCode);
        Map<String, Object> result = new HashMap();
        result.put("codeList", dataList);
        return result;
    }

    // 주문 조회 specification 이용 다중 조회조건으로 검색
    @ResponseBody
    @PostMapping(value = "/showOrder", produces = "application/json;charset=utf-8")
    public Map<String, Object> showOrder(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
        String odCode = (String) param.get("OD_CODE");
        int pagingIndex = (int) param.get("pagingIndex");
        int pagingRows = (int) param.get("pagingRows");
        Specification<OrderEntity> spec = (root, query, criteriaBuilder) -> null;
        Map<String, Object> result = new HashMap();
        if(odCode != "") {
            spec = spec.and(orderService.getByOdCode(odCode));
        }
        PageRequest page = PageRequest.of(pagingIndex, pagingRows);
        Page<OrderEntity> specOrder = orderRepository.findAll(spec, page);
        result.put("codeList", specOrder);
        return result;
    }

    // 특정 주문 세부정보 조회. ajax로 STRINGIFY.json 형태로 param 받을때는 @RequestBody 사용할것
    @ResponseBody
    @RequestMapping(value = "/showOrderDtl")
    public Map<String, Object> showOrderDtl(@RequestBody Map<String, Object> param, HttpServletRequest request) {
        String odCode = (String) param.get("OD_CODE");
        List<OrderDtlEntity> gridDataList = orderDtlRepository.findByOdCode(odCode);
        Map<String, Object> result = new HashMap();
        result.put("codeList", gridDataList);
        return result;
    }
}
