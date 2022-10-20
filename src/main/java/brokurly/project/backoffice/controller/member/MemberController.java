package brokurly.project.backoffice.controller.member;


import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import brokurly.project.backoffice.entity.member.MemberEntity;
import brokurly.project.backoffice.entity.member.MemberRepository;
import brokurly.project.backoffice.entity.product.ProductEntity;
import brokurly.project.backoffice.entity.product.ProductRepository;
import lombok.RequiredArgsConstructor;

@RestController // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/member")
public class MemberController {
	private final MemberRepository memberRepository;
	private final ProductRepository productRepository;
	
	// 전체 멤버 조회
	@GetMapping("/showMember")
	public List<MemberEntity> findAllMember(){
		List members = memberRepository.findAll();
		System.out.println("멤버 전체 조회 : " + members);
		return members;
	}
	// 전체 상품 조회
	@GetMapping("/showProduct")
	public List<ProductEntity> findAllProduct(){
		List products = productRepository.findAll();
		System.out.println("상품 전체 조회 : " + products);
		return products;
	}
	
	// POSTMAN에서 HTTP PUT 요청보내고 확인
//	@PostMapping("/add")
//	public void add() {
//		MemberEntity member = new MemberEntity("길동쓰", "홍길동");
//		memberRepository.save(member);
//	}
}
