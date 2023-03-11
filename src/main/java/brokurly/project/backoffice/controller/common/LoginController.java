package brokurly.project.backoffice.controller.common;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.AlgorithmParameterSpec;
import java.util.Map;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import brokurly.project.backoffice.common.AES256Util;
import brokurly.project.backoffice.service.common.LoginService;
import lombok.RequiredArgsConstructor;

@Controller // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/login")
public class LoginController {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Value("${key.aesKey}")
	private String key;

	private final LoginService loginService;
	
	@GetMapping("/loginPage")
	public String loginPage() {
		return "login/loginPage";
	}
	
	/**
	 *
	 * 로그인 프로세스.
	 *
	 * @param id 아이디
	 * @param pwd 비밀번호
	 * @param model Model
	 * @param request HttpServletRequest
	 * @param response HttpServletResponse
	 * @return Object
	 * @throws BadPaddingException 
	 * @throws IllegalBlockSizeException 
	 * @throws InvalidAlgorithmParameterException 
	 * @throws NoSuchPaddingException 
	 * @throws NoSuchAlgorithmException 
	 * @throws UnsupportedEncodingException 
	 * @throws InvalidKeyException 
	 */
	@ResponseBody
	@PostMapping(value = "/loginAction", produces = "application/json;charset=utf-8")
	public Object loginAction(@RequestBody Map<String, Object> param,
							 Model					model,
							 HttpServletRequest		request,
							 HttpServletResponse	response) throws InvalidKeyException, UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
		
		String id = (String) param.get("text_id");
		String pwd = (String) param.get("text_pwd");
		pwd = AES256Util.enCode(pwd, key);
		return loginService.updateLogin(id, pwd, request);
	}
}
