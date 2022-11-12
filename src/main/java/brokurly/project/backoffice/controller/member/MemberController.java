package brokurly.project.backoffice.controller.member;


import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import brokurly.project.backoffice.entity.member.MemberEntity;
import brokurly.project.backoffice.entity.member.MemberRepository;
import brokurly.project.backoffice.entity.product.ProductEntity;
import brokurly.project.backoffice.entity.product.ProductRepository;
import lombok.RequiredArgsConstructor;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/member")
public class MemberController {
	private final MemberRepository memberRepository;
	private final ProductRepository productRepository;
	
	// 전체 멤버 조회
	@ResponseBody
	@GetMapping("/showMember")
	public List<MemberEntity> findAllMember(){
		List<MemberEntity> members = memberRepository.findAll();
		System.out.println("멤버 전체 조회 : " + members);
		return members;
	}
	// 전체 상품 조회
	@ResponseBody
	@GetMapping("/showProduct")
	public List<ProductEntity> findAllProduct(){
		List products = productRepository.findAll();
		System.out.println("상품 전체 조회 : " + products);
		return products;
	}
	@GetMapping("/show")
	public String show() {
		return "member/show";
	}
	@GetMapping("/test")
	public String test() {
		return "member/test";
	}
	
	// POSTMAN에서 HTTP PUT 요청보내고 확인
//	@PostMapping("/add")
//	public void add() {
//		MemberEntity member = new MemberEntity("길동쓰", "홍길동");
//		memberRepository.save(member);
//	}
}
