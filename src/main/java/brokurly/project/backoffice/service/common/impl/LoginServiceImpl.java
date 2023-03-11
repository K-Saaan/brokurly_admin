package brokurly.project.backoffice.service.common.impl;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import brokurly.project.backoffice.common.DateUtil;
import brokurly.project.backoffice.entity.login.LoginHistEntity;
import brokurly.project.backoffice.entity.mng.MngEntity;
import brokurly.project.backoffice.repository.login.LoginHistRepository;
import brokurly.project.backoffice.repository.mng.MngRepository;
import brokurly.project.backoffice.service.common.LoginService;

@Service
public class LoginServiceImpl implements LoginService{
	
	private  final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private MngRepository mngRepository;
	
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
		
		MngEntity mng = mngRepository.findByMng(id, pwd);
		
		logger.info("mng :: " + mng);
		if(mng != null) {
			logger.info("login success >>>>>>>");
			
			// 계정잠김 여부 확인
			if(mng.getAcntLock().equals("Y")) {
				resultMap.put("RESULT", "LOCK_ACCOUNT");
				resultMap.put("URL", "");
				return resultMap;
			}
			String today = DateUtil.getTodayYYYYMMDD();
			String dateTime = LocalDateTime.now().toString();
			String pwdExpDate = mng.getPwdExpDate();
			
			// 만료일자 확인
			if(!DateUtil.beforeDate(today, pwdExpDate)) {
				resultMap.put("RESULT", "OVER_PASSWORD_DUE_DATE");
				resultMap.put("URL", "");
				return resultMap;
			}
			
			// 메인으로 이동
			resultMap.put("RESULT", "GO_MAIN");
			resultMap.put("URL", mng.getMainUrl());
			
			// 로그인 시간 update / 로그인 실패 횟수 0으로 초기화
			mng.LoginUpdate(0, "N", id, today);
			mngRepository.save(mng);
			
			String stringToday = DateUtil.getStringToday();

			// 로그인 이력 기록 
			LoginHistEntity loginHistEntity = LoginHistEntity.builder().mngId(id).loginDate(stringToday).regId(mng.getRegId())
																		.regDate(mng.getRegDate()).chgrId(mng.getChgrId()).chgrDate(dateTime).build();
			
			loginHsitRepository.save(loginHistEntity);
			
		}else {
			logger.info("login fail >>>>>>>");
			MngEntity idCheck = mngRepository.findByMngId(id);
			String dateTime = LocalDateTime.now().toString();
			if(idCheck != null) {
				int failCnt = idCheck.getLoginFailCnt();

				if(failCnt >= 5) {
					resultMap.put("RESULT", "OVER_LOGIN_FAIL_CNT");
					resultMap.put("URL", "");
					idCheck.LoginUpdate(failCnt+1, "Y", id, dateTime);
					mngRepository.save(idCheck);
				}else {
					resultMap.put("RESULT", "PWD_FAIL");
					resultMap.put("URL", "");
					resultMap.put("FAILCNT", failCnt+1);
					idCheck.LoginUpdate(failCnt+1, "N", id, dateTime);
					mngRepository.save(idCheck);
				}
			}else {
				// 로그인 실패
				resultMap.put("RESULT", "LOGIN_FAIL");
				resultMap.put("URL", "");
			}
		}
		
		HttpSession session = request.getSession(true);
		session.removeAttribute("mngId");
		session.setAttribute("mngId", id);
		
		
		
		return resultMap;
	}
}
