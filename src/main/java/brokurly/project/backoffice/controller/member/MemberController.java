package brokurly.project.backoffice.controller.member;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import brokurly.project.backoffice.entity.member.MemberDtlEntity;
import brokurly.project.backoffice.entity.member.MemberDtlRepository;
import brokurly.project.backoffice.entity.member.MemberEntity;
import brokurly.project.backoffice.entity.member.MemberRepository;
import brokurly.project.backoffice.entity.product.ProductEntity;
import brokurly.project.backoffice.entity.product.ProductRepository;
import lombok.RequiredArgsConstructor;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/member")
public class MemberController {
	
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	private final MemberRepository memberRepository;
	private final ProductRepository productRepository;
	private final MemberDtlRepository memberDtlRepository;
	
	// 전체 멤버 조회
	@ResponseBody
	@PostMapping(value = "/showMember", produces = "application/json;charset=utf-8")
	public Map<String, Object> findAllMember(Model model, HttpServletRequest request) throws Throwable {
		List<MemberEntity> gridDataList = memberRepository.findAll();
		Map<String, Object> result = new HashMap();
		result.put("codeList", gridDataList);
		return result;
	}
	// 전체 멤버 조회(카운트)
	@ResponseBody
	@PostMapping(value = "/showMemberCnt", produces = "application/json;charset=utf-8")
	public Map<String, Object> findAllMemberCnt(Model model, HttpServletRequest request) throws Throwable {
		int countData = Long.valueOf(memberRepository.count()).intValue();
		Map<String, Object> result = new HashMap();
		result.put("countData", countData);
		return result;
	}
	// 특정 멤버 세부정보 조회. ajax로 STRINGIFY.json 형태로 param 받을때는 @RequestBody 사용할것
	@ResponseBody
	@RequestMapping(value = "/showMemberDtl")
	public Map<String, Object> findDetailInfo(@RequestBody Map<String, Object> param, HttpServletRequest request){
		String custCode = (String)param.get("CUSTCODE");
		List<MemberDtlEntity> gridDataList = memberDtlRepository.findByCustCode(custCode);
		Map<String, Object> result = new HashMap();
		result.put("codeList", gridDataList);
		return result;
	}
	
	// 전체 상품 조회
	@ResponseBody
	@GetMapping("/showProduct")
	public List<ProductEntity> findAllProduct(){
		List products = productRepository.findAll();
		return products;
	}
	@GetMapping("/show")
	public String show() {
		return "member/show";
	}
	// POSTMAN에서 HTTP PUT 요청보내고 확인
//	@PostMapping("/add")
//	public void add() {
//		MemberEntity member = new MemberEntity("길동쓰", "홍길동");
//		memberRepository.save(member);
//	}
}
