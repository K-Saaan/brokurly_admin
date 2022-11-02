package brokurly.project.backoffice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller // ResponseBody 필요없음
public class HomeController {

	@GetMapping("/member/show")
	public String show() {
		return "/member/show";
	}
}
