package brokurly.project.backoffice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import brokurly.project.backoffice.entity.member.MemberRepository;
import brokurly.project.backoffice.entity.product.ProductRepository;
import lombok.RequiredArgsConstructor;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
public class HomeController {

	@GetMapping("/")
	public String loginPage() {
		return "login";
	}
	@GetMapping("/home")
	public String homePage() {
		return "home";
	}
}
