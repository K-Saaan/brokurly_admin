package brokurly.project.backoffice.controller.member;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import brokurly.project.backoffice.entity.member.MemberEntity;
import brokurly.project.backoffice.entity.product.ProductEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import brokurly.project.backoffice.dto.member.MemberDto;
import brokurly.project.backoffice.entity.member.MemberDtlEntity;
import brokurly.project.backoffice.repository.member.MemberDtlRepository;
import brokurly.project.backoffice.repository.member.MemberRepository;
import brokurly.project.backoffice.repository.product.ProductRepository;
import brokurly.project.backoffice.service.member.MemberService;
import lombok.RequiredArgsConstructor;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/member")
public class MemberController {
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	private final MemberRepository memberRepository;
	private final MemberDtlRepository memberDtlRepository;
	private final MemberService memberService;

	// 멤버 코드로 조회
	@ResponseBody
	@PostMapping(value = "/showMemberByCode", produces = "application/json;charset=utf-8")
	public Map<String, Object> findMemberByCode(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
		String memberCode = (String)param.get("MEMBER_CODE");
		Map<String, Object> result = new HashMap();
		// 고객코드 조회조건이 공란이면 전체 조회
		if(memberCode == "") {
			result = memberService.findAllMember();
		} else { // 고객코드 조회조건이 있으면 해당 데이터 조회
			result = memberService.findMemberByCode(memberCode);
		}

		return result;
	}

	// 멤버 조회 specification 이용. 다중 조회 조건.
	@ResponseBody
	@PostMapping(value="/showMember", produces = "application/json;charset=utf-8")
	public Map<String, Object> findMember(@RequestBody Map<String, Object> param, HttpServletRequest request) throws Throwable {
		String custNm = (String)param.get("CUST_NM");
		int pagingIndex = (int) param.get("pagingIndex");
		int pagingRows = (int) param.get("pagingRows");
		Specification<MemberEntity> spec = (root, query, criteriaBuilder) -> null;
		Map<String, Object> result = new HashMap();
		if(custNm != "") {
			spec = spec.and(memberService.getByCustNm(custNm));
		}
		PageRequest page = PageRequest.of(pagingIndex, pagingRows);
		Page<MemberEntity> specMember = memberRepository.findAll(spec, page);
		result.put("codeList", specMember);
		return result;
	}
	// 특정 멤버 세부정보 조회. ajax로 STRINGIFY.json 형태로 param 받을때는 @RequestBody 사용할것
	@ResponseBody
	@RequestMapping(value = "/showMemberDtl")
	public Map<String, Object> findDetailInfo(@RequestBody Map<String, Object> param, HttpServletRequest request){
		String custCode = (String)param.get("MEMBER_CODE");
		List<MemberDtlEntity> gridDataList = memberDtlRepository.findByCustCode(custCode);
		Map<String, Object> result = new HashMap();
		result.put("codeList", gridDataList);
		return result;
	}
	
	// 멤버 이름으로 조회(카운트)
	@ResponseBody
	@PostMapping(value = "/updateMember/{id}", produces = "application/json;charset=utf-8")
	public int updateMember(@PathVariable("id") String custCode, @RequestBody MemberDto memberDto) throws Throwable {
		return memberService.update(custCode, memberDto);
	}
	// 고객 정보 조회 화면 호출
	@GetMapping("/show")
	public String show() {
		return "member/show";
	}
	// 멤버 상세정보 화면 모달 호출
	@GetMapping("/detail")
	public String showDetailInfo() {
		return "member/detail";
	}
}
