package brokurly.project.backoffice.controller.member;


import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import brokurly.project.backoffice.entity.member.MemberEntity;
import brokurly.project.backoffice.entity.member.MemberRepository;
import lombok.RequiredArgsConstructor;

@RestController // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/member")
public class MemberController {
	private final MemberRepository memberRepository;
	
	// 전체 멤버 조회
	@GetMapping("/show")
	public List<MemberEntity> findAllMember(){
		List members = memberRepository.findAll();
		System.out.println(members);
		return members;
	}
	// 깃 커밋 테스트를 위한 주석
}
