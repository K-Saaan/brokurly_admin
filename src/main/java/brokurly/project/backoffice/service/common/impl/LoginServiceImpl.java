package brokurly.project.backoffice.service.common.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import brokurly.project.backoffice.common.DateUtil;
import brokurly.project.backoffice.entity.user.LoginHistEntity;
import brokurly.project.backoffice.entity.user.UserEntity;
import brokurly.project.backoffice.repository.user.LoginHistRepository;
import brokurly.project.backoffice.repository.user.UserRepository;
import brokurly.project.backoffice.service.common.LoginService;

@Service
public class LoginServiceImpl implements LoginService{
	
	private  final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private LoginHistRepository loginHsitRepository;
	
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
			
			// 로그인 시간 update / 로그인 실패 횟수 0으로 초기화
			UserEntity userEntity = UserEntity.builder().userId(id).userPwd(pwd).createDate(user.get(0).getCreateDate()).endDate(user.get(0).getEndDate())
														.pwdExpDate(user.get(0).getPwdExpDate()).loginFailCnt(0)
														.acntLock(user.get(0).getAcntLock()).mainUrl(user.get(0).getMainUrl()).bfPwd(user.get(0).getBfPwd())
														.regId(user.get(0).getRegId()).regDate(user.get(0).getRegDate())
														.chgrId(user.get(0).getChgrId()).chgrDate(today).build();
			userRepository.save(userEntity);
			
			String stringToday = DateUtil.getStringToday();
			
			// 로그인 이력 기록 
			LoginHistEntity loginHistEntity = LoginHistEntity.builder().userId(id).loginDate(stringToday).regId(user.get(0).getRegId()).regDate(user.get(0)
																	   .getRegDate()).chgrId(user.get(0).getChgrId()).chgrDate(today).build();
			
			loginHsitRepository.save(loginHistEntity);
			
		}else {
			logger.info("login fail >>>>>>>");
			List<UserEntity> idCheck = userRepository.findByUserId(id);
			String today = DateUtil.getTodayYYYYMMDD();
			if(idCheck != null) {
				int failCnt = idCheck.get(0).getLoginFailCnt();
				
				if(failCnt >= 5) {
					resultMap.put("RESULT", "OVER_LOGIN_FAIL_CNT");
					resultMap.put("URL", "");
					UserEntity userEntity = UserEntity.builder().userId(id).userPwd(pwd).createDate(user.get(0).getCreateDate()).endDate(user.get(0).getEndDate())
																.pwdExpDate(user.get(0).getPwdExpDate()).loginFailCnt(failCnt+1)
																.acntLock("Y").mainUrl(user.get(0).getMainUrl()).bfPwd(user.get(0).getBfPwd())
																.regId(user.get(0).getRegId()).regDate(user.get(0).getRegDate())
																.chgrId(user.get(0).getChgrId()).chgrDate(today).build();
					userRepository.save(userEntity);
				}else {
					resultMap.put("RESULT", "PWD_FAIL");
					resultMap.put("URL", "");
					resultMap.put("FAILCNT", failCnt+1);
					UserEntity userEntity = UserEntity.builder().userId(id).userPwd(pwd).createDate(user.get(0).getCreateDate()).endDate(idCheck.get(0).getEndDate())
																.pwdExpDate(user.get(0).getPwdExpDate()).loginFailCnt(failCnt+1)
																.acntLock(idCheck.get(0).getAcntLock()).mainUrl(user.get(0).getMainUrl()).bfPwd(idCheck.get(0).getBfPwd())
																.regId(user.get(0).getRegId()).regDate(user.get(0).getRegDate())
																.chgrId(user.get(0).getChgrId()).chgrDate(today).build();
					userRepository.save(userEntity);
				}
				
			}else {
				// 로그인 실패
				resultMap.put("RESULT", "LOGIN_FAIL");
				resultMap.put("URL", "");
			}
		}
		
		HttpSession session = request.getSession(true);
		session.removeAttribute("userId");
		session.setAttribute("userId", id);
		
		
		
		return resultMap;
	}
}
