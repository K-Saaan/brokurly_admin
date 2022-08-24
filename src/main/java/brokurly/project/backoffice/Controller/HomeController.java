package brokurly.project.backoffice.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
	@RequestMapping("/")
	@ResponseBody
	public String home() {
		return "indexHome";
	}
	@RequestMapping("/index")
	public String indexPage(Model model) {
		model.addAttribute("name", "index1234");
		return "index";
	}
}
