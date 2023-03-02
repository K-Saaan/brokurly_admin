package brokurly.project.backoffice.controller.common;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import brokurly.project.backoffice.entity.common.ComCodeEntity;
import brokurly.project.backoffice.repository.common.ComCodeRepository;
import lombok.RequiredArgsConstructor;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/common")
public class ComCodeController {
Logger logger = LoggerFactory.getLogger(this.getClass());
	
	private final ComCodeRepository comCodeRepository;
	
	// 특정 상품 세부정보 조회. ajax로 STRINGIFY.json 형태로 param 받을때는 @RequestBody 사용할것
	@ResponseBody
	@RequestMapping(value = "/showCode")
	public Map<String, Object> findCode(@RequestBody Map<String, Object> param, HttpServletRequest request){
		String category = (String)param.get("CATEGORY");
		List<ComCodeEntity> gridDataList = comCodeRepository.findByCategory(category);
		Map<String, Object> result = new HashMap();
		result.put("codeList", gridDataList);
		return result;
	}
}
