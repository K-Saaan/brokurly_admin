package brokurly.project.backoffice.service.common.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import brokurly.project.backoffice.common.DateUtil;
import brokurly.project.backoffice.entity.user.UserEntity;
import brokurly.project.backoffice.entity.user.UserRepository;
import brokurly.project.backoffice.service.common.LoginService;
import lombok.RequiredArgsConstructor;

@Service
public class LoginServiceImpl implements LoginService{
	
	private  final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private UserRepository userRepository;
	
	private UserEntity userEntity;
	
	@Override
	public Map<String, Object> updateLogin(String id, String pwd, HttpServletRequest request){
		
		Map<String,Object> resultMap= new HashMap<String, Object>();
		
		// input data null check
		if ("".equals(id) || "".equals(pwd)) {
			resultMap.put("RESULT", "INPUT_NULL");
			resultMap.put("GO_MAIN", "");
			return resultMap;
		}
		
		UserEntity user = userRepository.findByUser(id, pwd);
		
		if(user != null) {
			logger.info("login success >>>>>>>");
			
			if(user.getAcntLock().equals("Y")) {
				resultMap.put("RESULT", "LOCK_ACCOUNT");
				resultMap.put("GO_MAIN", "");
				return resultMap;
			}
			String today = DateUtil.getTodayYYYYMMDD();
			String pwdExpDate = user.getPwdExpDate();
			if(!DateUtil.beforeDate(today, pwdExpDate)) {
				resultMap.put("RESULT", "OVER_PASSWORD_DUE_DATE");
				resultMap.put("GO_MAIN", "");
				return resultMap;
			}
			
			
			
			resultMap.put("GO_MAIN", user.getMainUrl());
			
		}else {
			resultMap.put("RESULT", "LOGIN_FAIL");
			resultMap.put("GO_MAIN", "");
		}
		
		
		return resultMap;
	}
}
