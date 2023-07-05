package brokurly.project.backoffice.controller.order;

import brokurly.project.backoffice.common.Consts;
import brokurly.project.backoffice.service.common.SequenceService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/order")
public class OrderController {
    Logger logger = LoggerFactory.getLogger(this.getClass());

    private final SequenceService sequenceService;

    @GetMapping("/regOrder")
    public String regOrder() {
        return "order/regOrder";
    }

    @ResponseBody
    @PostMapping(value = "/addOrder", produces = "application/json;charset=utf-8")
    public int addOrder(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
        try {
            HttpSession session = request.getSession();
            String regId = (String) session.getAttribute("mngId");

            String orderCode = sequenceService.createNewSequence(Consts.TBL_CODE.OD_INFO, 10);
            return 1;
        } catch (Exception e) {
            logger.info("error");
            return 0;
        }
    }
}
