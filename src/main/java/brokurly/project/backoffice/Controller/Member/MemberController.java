package brokurly.project.backoffice.Controller.Member;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import brokurly.project.backoffice.Entity.Member.MemberEntity;
import brokurly.project.backoffice.Repository.MemberRepository;
import lombok.RequiredArgsConstructor;

@RestController // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/v1")
public class MemberController {
	private final MemberRepository memberRepository;
	
	// 멤버 조회
	@RequestMapping(value = "member", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public List<MemberEntity> findAllMember(){
		List members = memberRepository.findAll();
		System.out.println(members);
		return members;
	}
}
