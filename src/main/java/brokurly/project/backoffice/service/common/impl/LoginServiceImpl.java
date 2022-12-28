package brokurly.project.backoffice.service.common.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

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
		
		// Null 체크
		if ("".equals(id) || "".equals(pwd)) {
			resultMap.put("RESULT", "INPUT_NULL");
			resultMap.put("URL", "");
			return resultMap;
		}
		
		List<UserEntity> user = userRepository.findByUser(id, pwd);
		logger.info("user :: " + user);
		if(user.size() != 0) {
			logger.info("login success >>>>>>>");
			
			// 계정잠김 여부 확인
			if(user.get(0).getAcntLock().equals("Y")) {
				resultMap.put("RESULT", "LOCK_ACCOUNT");
				resultMap.put("URL", "");
				return resultMap;
			}
			String today = DateUtil.getTodayYYYYMMDD();
			String pwdExpDate = user.get(0).getPwdExpDate();
			
			// 만료일자 확인
			if(!DateUtil.beforeDate(today, pwdExpDate)) {
				resultMap.put("RESULT", "OVER_PASSWORD_DUE_DATE");
				resultMap.put("URL", "");
				return resultMap;
			}
			
			// 메인으로 이동
			resultMap.put("RESULT", "GO_MAIN");
			resultMap.put("URL", user.get(0).getMainUrl());
			
			// 로그인 시간 update
			UserEntity userEntity = UserEntity.builder().userId(id).loginFailCnt(0).chgrDate(today).build();
			userRepository.save(userEntity);
			
		}else {
			logger.info("login fail >>>>>>>");
			List<UserEntity> idCheck = userRepository.findByUserId(id);
			String today = DateUtil.getTodayYYYYMMDD();
			if(idCheck != null) {
				int failCnt = idCheck.get(0).getLoginFailCnt() + 1;
				
				resultMap.put("RESULT", "PWD_FAIL");
				resultMap.put("URL", "");
				resultMap.put("FAILCNT", failCnt);
				
				UserEntity userEntity = UserEntity.builder().userId(id).loginFailCnt(failCnt+1).chgrDate(today).build();
				userRepository.save(userEntity);
			}
			
			// 로그인 실패
			resultMap.put("RESULT", "LOGIN_FAIL");
			resultMap.put("URL", "");
		}
		
		
		return resultMap;
	}
}
