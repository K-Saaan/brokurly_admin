package brokurly.project.backoffice.service.common.impl;

import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import brokurly.project.backoffice.entity.user.UserRepository;
import brokurly.project.backoffice.service.common.LoginService;
import lombok.RequiredArgsConstructor;

@Service
public class LoginServiceImpl implements LoginService{
	
	private  final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public Map<String, Object> updateLogin(String id, String pwd, HttpServletRequest request){
		
		Map<String,Object> resultMap= new HashMap<String, Object>();
		
		// input data null check
		if ("".equals(id) || "".equals(pwd)) {
			resultMap.put("RESULT", "INPUT_NULL");
			resultMap.put("GO_MAIN", "");
			return resultMap;
		}
		
		if(isAccountLock(id)) {
			resultMap.put("RESULT", "LOCK_ACCOUNT");
			resultMap.put("GO_MAIN", "");
			return resultMap;
		}
		
		return resultMap;
	}


	private boolean isAccountLock(String id) {
		
		boolean Yn = false;
		
		String acntYn = userRepository.findByUserId(id).get(0).getAcntLock();
		
		if(acntYn.equals("Y")) {
			Yn = true;
		}
		
		return Yn;
	}
}
