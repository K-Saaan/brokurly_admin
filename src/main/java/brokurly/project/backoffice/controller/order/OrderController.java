package brokurly.project.backoffice.controller.order;

import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/order")
public class OrderController {
    Logger logger = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/regOrder")
    public String regOrder() {
        return "order/regOrder";
    }
}
