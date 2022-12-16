package brokurly.project.backoffice.controller.common;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.AlgorithmParameterSpec;
import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
	
	@Autowired
	private LoginService loginService;
	
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
	@RequestMapping(value = "loginAction", method = RequestMethod.POST)
	public @ResponseBody Object loginAction(
							@RequestParam(required = false) String id,
							@RequestParam(required = false) String pwd,
							 Model					model,
							 HttpServletRequest		request,
							 HttpServletResponse	response) throws InvalidKeyException, UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
		
		//pswd = AES256Cipher.AES_Encode(pswd,Consts.ENCODE_KEY);
		pwd = AES256Util.enCode(pwd);
		return loginService.updateLogin(id, pwd, request);
	}
}
