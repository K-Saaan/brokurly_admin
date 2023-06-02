package brokurly.project.backoffice.controller.etc;

import brokurly.project.backoffice.entity.etc.NoticeEntity;
import brokurly.project.backoffice.entity.product.ProductEntity;
import brokurly.project.backoffice.repository.etc.NoticeRepository;
import brokurly.project.backoffice.service.etc.NoticeService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/etc")
public class EtcController {
    Logger logger = LoggerFactory.getLogger(this.getClass());

    private final NoticeRepository noticeRepository;
    private final NoticeService noticeService;

    @GetMapping("/notice")
    public String showNotice() {
        return "etc/notice";
    }

    // 공지사항 조회 specification 이용 다중 조회조건으로 검색
    @ResponseBody
    @PostMapping(value = "/showNotice", produces = "application/json;charset=utf-8")
    public Map<String, Object> showNotice(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
        String noticeTitle = (String)param.get("NOTICE_TITLE");
        int pagingIndex = (int) param.get("pagingIndex");
        int pagingRows = (int) param.get("pagingRows");
        Specification<NoticeEntity> spec = (root, query, criteriaBuilder) -> null;
        Map<String, Object> result = new HashMap();
        if(noticeTitle != "") {
            spec = spec.and(noticeService.getByNoticeTitle(noticeTitle));
        }
        PageRequest page = PageRequest.of(pagingIndex, pagingRows);
        Page<NoticeEntity> specNotice = noticeRepository.findAll(spec, page);
        result.put("codeList", specNotice);
        return result;
    }
}
