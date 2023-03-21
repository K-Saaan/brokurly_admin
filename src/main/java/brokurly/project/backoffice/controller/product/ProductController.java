package brokurly.project.backoffice.controller.product;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

import brokurly.project.backoffice.entity.member.MemberDtlEntity;
import brokurly.project.backoffice.entity.product.ProductDtlEntity;
import brokurly.project.backoffice.entity.product.ProductEntity;
import brokurly.project.backoffice.entity.product.ReviewEntity;
import brokurly.project.backoffice.repository.product.ProductDtlRepository;
import brokurly.project.backoffice.repository.product.ProductRepository;
import brokurly.project.backoffice.repository.product.ReviewRepository;
import brokurly.project.backoffice.service.product.ProductService;
import brokurly.project.backoffice.service.product.ReviewService;
import lombok.RequiredArgsConstructor;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/product")
public class ProductController {
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	private final ProductRepository productRepository;
	private final ProductService productService;
	private final ProductDtlRepository productDtlRepository;
	private final ReviewRepository reviewRepository;
	private final ReviewService reviewService;
	
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
	
	// 상품 조회 specification 이용 다중 조회조건으로 검색
	@ResponseBody
	@PostMapping(value = "/showProduct", produces = "application/json;charset=utf-8")
	public Map<String, Object> findProduct(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
		String pdNm = (String)param.get("PRODUCT_NAME");
		String pakgType = (String)param.get("PAKG_TYPE");
		int pagingIndex = (int) param.get("pagingIndex");
		int pagingRows = (int) param.get("pagingRows");
		Specification<ProductEntity> spec = (root, query, criteriaBuilder) -> null;
		Map<String, Object> result = new HashMap();
		if(pdNm != "") {
			spec = spec.and(productService.getByPdNm(pdNm));
		}
		if(pakgType != "") {
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
	public Map<String, Object> findProductDetailInfo(@RequestBody Map<String, Object> param, HttpServletRequest request){
		String pdCode = (String)param.get("PRODUCT_CODE");
		List<ProductDtlEntity> gridDataList = productDtlRepository.findByPdCode(pdCode);
		Map<String, Object> result = new HashMap();
		result.put("codeList", gridDataList);
		return result;
	}
	
	// 후기 조회 specification 이용 다중 조회조건으로 검색
	@ResponseBody
	@PostMapping(value = "/showReview", produces = "application/json;charset=utf-8")
	public Map<String, Object> findReview(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
		String pdNm = (String)param.get("PD_NM");
		String custNm = (String)param.get("CUST_NM");
		int pagingIndex = (int) param.get("pagingIndex");
		int pagingRows = (int) param.get("pagingRows");
		Specification<ReviewEntity> spec = (root, query, criteriaBuilder) -> null;
		Map<String, Object> result = new HashMap();
		if(pdNm != "") {
			spec = spec.and(reviewService.getByPdNm(pdNm));
		}
		if(custNm != "") {
			spec = spec.and(reviewService.getByCustNm(custNm));
		}
		PageRequest page = PageRequest.of(pagingIndex, pagingRows);
		Page<ReviewEntity> specProduct = reviewRepository.findAll(spec, page);
		result.put("codeList", specProduct);
 		return result;
	}
	// 후기 상세화면
//	@ResponseBody
//	@PostMapping(value = "/showReviewDetail", produces = "application/json;charset=utf-8")
//	public Map<String, Object> findReviewDetail(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
//		int reviewSeqNo = Integer.parseInt(String.valueOf(param.get("REVIEW_SEQ_NO")));
//		ReviewEntity review = reviewRepository.findByReviewSeqNo(reviewSeqNo);
//		Map<String, Object> result = new HashMap();
//		result.put("codeList", gridDataList);
// 		return result;
//	}
}
