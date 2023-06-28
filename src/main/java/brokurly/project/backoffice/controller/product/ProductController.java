package brokurly.project.backoffice.controller.product;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import brokurly.project.backoffice.common.AES256Util;
import brokurly.project.backoffice.common.CipherUtil;
import brokurly.project.backoffice.common.Consts;
import brokurly.project.backoffice.dto.product.*;
import brokurly.project.backoffice.entity.product.*;
import brokurly.project.backoffice.repository.product.*;
import brokurly.project.backoffice.service.common.SequenceService;
import brokurly.project.backoffice.service.product.CouponService;
import brokurly.project.backoffice.service.product.QnaService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;

import brokurly.project.backoffice.service.product.ProductService;
import brokurly.project.backoffice.service.product.ReviewService;
import lombok.RequiredArgsConstructor;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/product")
public class ProductController {
    Logger logger = LoggerFactory.getLogger(this.getClass());

    @Value("${key.aesKey}")
    private String key;

    private final ProductRepository productRepository;
    private final ProductService productService;
    private final ProductDtlRepository productDtlRepository;
    private final ReviewRepository reviewRepository;
    private final CouponRepository couponRepository;
    private final CouponDtlRepository couponDtlRepository;
    private final QnaRepository qnaRepository;
    private final ReviewService reviewService;
    private final QnaService qnaService;
    private final CouponService couponService;
    private final SequenceService sequenceService;

    // 상품 조회 화면

    @GetMapping("/show")
    public String show() {
        return "product/show";
    }

    // 후기 조회 화면
    @GetMapping("/review")
    public String showReview() {
        return "product/review";
    }

    // 후기 상세화면 모달
    @GetMapping("/review/detail")
    public String showReviewDetail() {
        return "product/review/detail";
    }

    // 문의 조회 화면
    @GetMapping("/qna")
    public String showQna() {
        return "product/qna";
    }

    // 문의 상세화면 모달
    @GetMapping("/qna/detail")
    public String showQnaDetail() {
        return "product/qna/detail";
    }

    // 쿠폰 조회 화면
    @GetMapping("/coupon")
    public String showCoupon() {
        return "product/coupon";
    }

    // 쿠폰 등록 모달
    @GetMapping("/coupon/register")
    public String registerCpnInfo() {
        return "product/coupon/register";
    }
    // 쿠폰 상품등록 모달
    @GetMapping("/coupon/regProduct")
    public String registerCpnPdInfo() {
        return "product/coupon/regProduct";
    }

    // 상품 조회 specification 이용 다중 조회조건으로 검색
    @ResponseBody
    @PostMapping(value = "/showProduct", produces = "application/json;charset=utf-8")
    public Map<String, Object> findProduct(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
        String pdNm = (String) param.get("PRODUCT_NAME");
        String pakgType = (String) param.get("PAKG_TYPE");
        int pagingIndex = (int) param.get("pagingIndex");
        int pagingRows = (int) param.get("pagingRows");
        Specification<ProductEntity> spec = (root, query, criteriaBuilder) -> null;
        Map<String, Object> result = new HashMap();
        if (pdNm != "") {
            spec = spec.and(productService.getByPdNm(pdNm));
        }
        if (pakgType != "") {
            spec = spec.and(productService.getByPakgType(pakgType));
        }
        PageRequest page = PageRequest.of(pagingIndex, pagingRows);
        Page<ProductEntity> specProduct = productRepository.findAll(spec, page);
        result.put("codeList", specProduct);
        return result;
    }

    // 특정 상품 세부정보 조회. ajax로 STRINGIFY.json 형태로 param 받을때는 @RequestBody 사용할것
    @ResponseBody
    @RequestMapping(value = "/showProductDtl")
    public Map<String, Object> findProductDetailInfo(@RequestBody Map<String, Object> param, HttpServletRequest request) {
        String pdCode = (String) param.get("PRODUCT_CODE");
        List<ProductDtlEntity> gridDataList = productDtlRepository.findByPdCode(pdCode);
        Map<String, Object> result = new HashMap();
        result.put("codeList", gridDataList);
        return result;
    }

    // 후기 조회 specification 이용 다중 조회조건으로 검색
    @ResponseBody
    @PostMapping(value = "/showReview", produces = "application/json;charset=utf-8")
    public Map<String, Object> findReview(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
        String pdNm = (String) param.get("PD_NM");
        String custNm = (String) param.get("CUST_NM");
        String custNmChanged = AES256Util.enCode(custNm, key);
        int pagingIndex = (int) param.get("pagingIndex");
        int pagingRows = (int) param.get("pagingRows");
        Specification<ReviewEntity> spec = (root, query, criteriaBuilder) -> null;
        Map<String, Object> result = new HashMap();
        if (pdNm != "") {
            spec = spec.and(reviewService.getByPdNm(pdNm));
        }
        if (custNm != "") {
            spec = spec.and(reviewService.getByCustNm(custNmChanged));
        }
        PageRequest page = PageRequest.of(pagingIndex, pagingRows);
        Page<ReviewEntity> specProduct = reviewRepository.findAll(spec, page);

        result.put("codeList", CipherUtil.changeDecodeObjectList(specProduct, ReviewEntity.class, key));
        return result;
    }

    // 문의 조회 specification 이용 다중 조회조건으로 검색
    @ResponseBody
    @PostMapping(value = "/showQna", produces = "application/json;charset=utf-8")
    public Map<String, Object> findQna(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
        String pdCode = (String) param.get("PD_CODE");
        String custCode = (String) param.get("CUST_CODE");
        int pagingIndex = (int) param.get("pagingIndex");
        int pagingRows = (int) param.get("pagingRows");
        Specification<QnaEntity> spec = (root, query, criteriaBuilder) -> null;
        Map<String, Object> result = new HashMap();
        if (pdCode != "") {
            spec = spec.and(qnaService.getByPdCode(pdCode));
        }
        if (custCode != "") {
            spec = spec.and(qnaService.getByCustCode(custCode));
        }
        PageRequest page = PageRequest.of(pagingIndex, pagingRows);
        Page<QnaEntity> specProduct = qnaRepository.findAll(spec, page);
        result.put("codeList", specProduct);
        return result;
    }

    // 후기 상세화면 데이터 바인딩
    @ResponseBody
    @RequestMapping(value = "/showQnaDtl")
    public Map<String, Object> findProductQnaInfo(@RequestBody Map<String, Object> param, HttpServletRequest request) {
        String qnaCode = (String) param.get("QNA_CODE");
        List<QnaEntity> gridDataList = qnaRepository.findByQnaCode(qnaCode);
        Map<String, Object> result = new HashMap();
        result.put("codeList", gridDataList);
        return result;
    }

    // 문의 답변 등록
    @ResponseBody
    @PostMapping(value = "/replyQna/{id}", produces = "application/json;charset=utf-8")
    public int replyQna(@PathVariable("id") String qnaCode, @RequestBody QnaDto qnaDto) throws Throwable {
        return qnaService.replyQna(qnaCode, qnaDto);
    }

    @ResponseBody
    @PostMapping(value = "/deleteReview")
    public int deleteReview(@RequestBody List<Integer> reviewSeqId, HttpServletRequest request) {
        return reviewService.deleteReview(reviewSeqId);
    }

    // 상품, 리뷰 테이블 조인 조회
    @ResponseBody
    @PostMapping(value = "/showProductAndReview", produces = "application/json;charset=utf-8")
    public Map<String, Object> findProductAndReview(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
        Map<String, Object> result = new HashMap();
//		List<ProductReviewDto> gridDataList = productRepository.showProductAndReview();
        int pagingIndex = (int) param.get("pagingIndex");
        int pagingRows = (int) param.get("pagingRows");
        PageRequest page = PageRequest.of(pagingIndex, pagingRows);
        Page<ProductReviewDto> gridDataList = productRepository.showProductAndReview(page);
        result.put("codeList", gridDataList);
        return result;
    }

    // 쿠폰 조회 specification 이용 다중 조회조건으로 검색
    @ResponseBody
    @PostMapping(value = "/showCoupon", produces = "application/json;charset=utf-8")
    public Map<String, Object> findCoupon(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
        String mgrId = (String) request.getSession().getAttribute("mngId");

        String cpnCode = (String) param.get("CPN_CODE");
        String cpnNm = (String) param.get("CPN_NM");
        int pagingIndex = (int) param.get("pagingIndex");
        int pagingRows = (int) param.get("pagingRows");
        Specification<CouponEntity> spec = (root, query, criteriaBuilder) -> null;
        Map<String, Object> result = new HashMap();
        if (cpnCode != "") {
            spec = spec.and(couponService.getByCpnCode(cpnCode));
        }
        if (cpnNm != "") {
            spec = spec.and(couponService.getByCpnNm(cpnNm));
        }
        PageRequest page = PageRequest.of(pagingIndex, pagingRows);
        Page<CouponEntity> specProduct = couponRepository.findAll(spec, page);
        result.put("codeList", specProduct);
        return result;
    }

    // 쿠폰 등록
    @ResponseBody
    @PostMapping(value = "/regCoupon", produces = "application/json;charset=utf-8")
    public int regCoupon(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
        String cpnGubun = (String) param.get("cpnGubun");
        String cpnNm = (String) param.get("cpnNm");
        String cpnStat = (String) param.get("cpnStat");
        String startDate = (String) param.get("startDate");
        String endDate = (String) param.get("endDate");
        BigDecimal cpnPrice = new BigDecimal((String) param.get("cpnPrice"));
        BigDecimal cpnRatio = new BigDecimal((String) param.get("cpnRatio"));
        BigDecimal minOdAmt = new BigDecimal((String) param.get("minOdAmt"));
        BigDecimal maxAmt = new BigDecimal((String) param.get("maxAmt"));
        String dtlDesc = (String) param.get("dtlDesc");
        String useReq = (String) param.get("useReq");
        Timestamp now = new Timestamp(System.currentTimeMillis());

        try {
            HttpSession session = request.getSession();
            String regId = (String) session.getAttribute("mngId");
            CouponEntity cpn = couponRepository.findTop1ByOrderByCpnCodeDesc(); // 내림차순으로 쿠폰코드 값 조회

            // 쿠폰코드 채번
            String cpnCode = sequenceService.createNewSequence(Consts.TBL_CODE.CPN_INFO, 10);

			/*String cpnCode = cpn.getCpnCode();
			String cpEnglish = cpnCode.substring(0,2); // 앞에 있는 CP만 떼놓기
			int cpNumber = Integer.parseInt(cpnCode.substring(2)) + 1; // 뒤에 있는 숫자 떼서 1 더해주기
			String cpNumToString = String.format("%08d", cpNumber); // 자리수만큼 앞에 0 채워주기
			cpNumToString = cpEnglish + cpNumToString; // 앞에 CP와 뒤의 숫자 합쳐주기*/

            CouponEntity coupon = CouponEntity.builder().cpnCode(cpnCode).cpnGubun(cpnGubun).cpnNm(cpnNm)
                    .cpnStat(cpnStat).startDate(startDate).endDate(endDate).cpnPrice(cpnPrice).cpnRatio(cpnRatio)
                    .minOdAmt(minOdAmt).maxAmt(maxAmt).dtlDesc(dtlDesc).useReq(useReq).regId(regId).regDate(now).build();
            couponRepository.save(coupon);
            return 1;
        } catch (Exception e) {
            logger.info("error");
            return 0;
        }
    }

    // 쿠폰 수정화면 데이터 바인딩
    @ResponseBody
    @RequestMapping(value = "/modCpnInfo")
    public Map<String, Object> modCouponInfo(@RequestBody Map<String, Object> param, HttpServletRequest request) {
        String cpnCode = (String) param.get("CPN_CODE");
        List<CouponEntity> gridDataList = couponRepository.findByCpnCode(cpnCode);
        Map<String, Object> result = new HashMap();
        result.put("codeList", gridDataList);
        return result;
    }

    // 쿠폰 수정 처리
    @ResponseBody
    @PostMapping(value = "/modCpn/{id}", produces = "application/json;charset=utf-8")
    public int modCpn(@PathVariable("id") String cpnCode, @RequestBody CouponDto couponDto, HttpServletRequest request) throws Throwable {
        return couponService.modCpn(cpnCode, couponDto, request);
    }

    // 특정 쿠폰 세부정보 조회. ajax로 STRINGIFY.json 형태로 param 받을때는 @RequestBody 사용할것
    @ResponseBody
    @RequestMapping(value = "/showCouponDtl")
    public Map<String, Object> findCouponDetailInfo(@RequestBody Map<String, Object> param, HttpServletRequest request) {
        String cpnCode = (String) param.get("CPN_CODE");
        List<CouponDtlDto> gridDataList = couponDtlRepository.showCpnPdInfo(cpnCode);
        Map<String, Object> result = new HashMap();
        result.put("codeList", gridDataList);
        return result;
    }

    // 쿠폰 상품등록 모달창 등록 기능
    @ResponseBody
    @PostMapping(value = "/regCpnProduct", produces = "application/json;charset=utf-8")
    public int regCpnProduct(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
        String cpnCode = (String) param.get("cpnCode");
        String pdCode = (String) param.get("pdCode");
        Timestamp now = new Timestamp(System.currentTimeMillis());

        try {
            HttpSession session = request.getSession();
            String regId = (String) session.getAttribute("mngId");

            CouponDtlEntity cpn = CouponDtlEntity.builder().cpnCode(cpnCode).pdCode(pdCode)
                    .useYn("Y").regId(regId).regDate(now.toLocalDateTime()).build();
            couponDtlRepository.save(cpn);
            return 1;
        } catch (Exception e) {
            logger.info("error");
            return 0;
        }
    }

    // 쿠폰에 등록된 상품 삭제
    @ResponseBody
    @PostMapping(value = "/deleteCpnPd")
    public int deleteCpnPd(@RequestBody List<Object> param, HttpServletRequest request) {
        try {
            return couponService.deleteCpnPd(param);
        } catch (Exception e) {
            e.printStackTrace();
            return couponService.deleteCpnPd(param);
        }
    }

    // 쿠폰에 등록된 상품 사용처리
    @ResponseBody
    @PostMapping(value = "/updateUseY")
    public int updateUseY(@RequestBody List<Object> param, HttpServletRequest request) {
        try {
            return couponService.updateUseY(param);
        } catch (Exception e) {
            e.printStackTrace();
            return couponService.updateUseY(param);
        }
    }
}
