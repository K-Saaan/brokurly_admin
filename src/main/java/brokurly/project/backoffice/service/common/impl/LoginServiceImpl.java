package brokurly.project.backoffice.service.common.impl;

import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import brokurly.project.backoffice.service.common.LoginService;

@Service
public class LoginServiceImpl implements LoginService{
	
	private  final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	
	@Override
	public Map<String, Object> updateLogin(String id, String pwd, HttpServletRequest request){
		
		Map<String,Object> resultMap= new HashMap<String, Object>();
		
		// input data null check
		if ("".equals(id) || "".equals(pwd)) {
			resultMap.put("RESULT", "INPUT_NULL");
			resultMap.put("MAIN_URL", "");
			return resultMap;
		}
		
		return resultMap;
	}
}
