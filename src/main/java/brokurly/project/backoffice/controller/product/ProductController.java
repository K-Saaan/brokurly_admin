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
import org.springframework.data.jpa.domain.Specification;

import brokurly.project.backoffice.entity.member.MemberDtlEntity;
import brokurly.project.backoffice.entity.product.ProductDtlEntity;
import brokurly.project.backoffice.entity.product.ProductEntity;
import brokurly.project.backoffice.repository.product.ProductDtlRepository;
import brokurly.project.backoffice.repository.product.ProductRepository;
import brokurly.project.backoffice.service.product.ProductService;
import lombok.RequiredArgsConstructor;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/product")
public class ProductController {
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	private final ProductRepository productRepository;
	private final ProductService productService;
	private final ProductDtlRepository productDtlRepository;
	
	@GetMapping("/show")
	public String show() {
		return "product/show";
	}
	
	// 상품 이름으로 조회
	@ResponseBody
	@PostMapping(value = "/showProductByName", produces = "application/json;charset=utf-8")
	public Map<String, Object> findProductByName(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
		String productName = (String)param.get("PRODUCT_NAME");
		int countData = 0;
		Map<String, Object> result = new HashMap();
		// 고객이름 조회조건이 공란이면 전체 조회
		if(productName == "") {
			countData = Long.valueOf(productRepository.count()).intValue();
			if(countData > 0) {
				result = productService.findAllProduct();
			}
		} else { // 고객이름 조회조건이 있으면 해당 데이터 조회
			countData = productService.countByPdnm(productName);
			if(countData > 0) {
				result = productService.findProductByName(productName);
			}
		}
		result.put("countData", countData);
		return result;
	}
	
	// 상품 조회 specification 이용 다중 조회조건으로 검색
	@ResponseBody
	@PostMapping(value = "/showProduct", produces = "application/json;charset=utf-8")
	public Map<String, Object> findProduct(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
		String pdnm = (String)param.get("PRODUCT_NAME");
		String packtype = (String)param.get("PACK_TYPE");
		Specification<ProductEntity> spec = (root, query, criteriaBuilder) -> null;
		Map<String, Object> result = new HashMap();
		int countData = 0;
		if(pdnm != "") {
			spec = spec.and(productService.getByPdnm(pdnm));
		}
		if(packtype != "") {
			spec = spec.and(productService.getByPacktype(packtype));
		}
		List<ProductEntity> specProduct = productRepository.findAll(spec);
		logger.info("size");
		logger.info(Integer.toBinaryString(specProduct.size()));
		countData = specProduct.size();
		result.put("codeList", specProduct);
		result.put("countData", countData);
 		return result;
	}
	
	// 특정 상품 세부정보 조회. ajax로 STRINGIFY.json 형태로 param 받을때는 @RequestBody 사용할것
	@ResponseBody
	@RequestMapping(value = "/showProductDtl")
	public Map<String, Object> findProductDetailInfo(@RequestBody Map<String, Object> param, HttpServletRequest request){
		String pdcode = (String)param.get("PRODUCT_CODE");
		List<ProductDtlEntity> gridDataList = productDtlRepository.findByPdcode(pdcode);
		Map<String, Object> result = new HashMap();
		result.put("codeList", gridDataList);
		return result;
	}
}
