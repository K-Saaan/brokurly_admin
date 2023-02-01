package brokurly.project.backoffice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import brokurly.project.backoffice.entity.product.ProductEntity;
import brokurly.project.backoffice.repository.product.ProductRepository;
import lombok.RequiredArgsConstructor;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
public class HomeController {
	private final ProductRepository productRepository;

	@PostMapping("/home")
	public String homePage() {
		return "common/home";
	}
	
	// 상품 이름으로 조회
	@ResponseBody
	@PostMapping(value = "/showProductChart", produces = "application/json;charset=utf-8")
	public Map<String, Object> showProductChart(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
		Map<String, Object> result = new HashMap();
		List<Object[]> gridDataList = productRepository.showBySalesunit();
		result.put("codeList", gridDataList);
		return result;
	}
	
	// 상품 카테고리별 상품가 총합
	@ResponseBody
	@PostMapping(value = "/showSumOfProduct", produces = "application/json;charset=utf-8")
	public Map<String, Object> showSumOfProduct(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
		Map<String, Object> result = new HashMap();
		List<Object[]> gridDataList = productRepository.showSumOfProduct();
		result.put("codeList", gridDataList);
		return result;
	}
}
