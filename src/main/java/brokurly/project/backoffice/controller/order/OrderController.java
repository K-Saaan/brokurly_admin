package brokurly.project.backoffice.controller.order;

import brokurly.project.backoffice.common.Consts;
import brokurly.project.backoffice.dto.order.OrderDto;
import brokurly.project.backoffice.entity.order.DeliLocInfoEntity;
import brokurly.project.backoffice.repository.order.DeliLocInfoRepository;
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
import java.util.Map;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/order")
public class OrderController {
    Logger logger = LoggerFactory.getLogger(this.getClass());

    private final DeliLocInfoRepository deliLocInfoRepository;
    private final SequenceService sequenceService;
    private final DeliLocInfoService deliLocInfoService;
    private final OrderService orderService;

    @GetMapping("/regOrder")
    public String regOrder() {
        return "order/regOrder";
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
}
