package brokurly.project.backoffice.controller.member;

import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.AlgorithmParameterSpec;
import java.util.ArrayList;
import java.util.List;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

import org.h2.util.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import brokurly.project.backoffice.common.AES256Util;
import brokurly.project.backoffice.entity.user.UserEntity;
import brokurly.project.backoffice.entity.user.UserRepository;
import lombok.RequiredArgsConstructor;

@RestController // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/user")
public class UserController {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	
	private final UserRepository userRepository;
	
	// 전체 User 조회
	@ResponseBody
	@GetMapping("/showUser")
	public List<UserEntity> findAllUser() throws InvalidKeyException, UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException{
		List<UserEntity> users = new ArrayList<>();
		try {
		users = userRepository.findAll();
		ObjectMapper mapper = new ObjectMapper();
			logger.info("User 전체 조회 logger : " + mapper.writeValueAsString(users));
			String pw = users.get(0).getUserPwd();
			logger.info("UserPwd 조회 logger : " + pw);
			String encodePw = AES256Util.enCode(pw);
			logger.info("encodePwd 조회 logger : " + encodePw);
		} catch (JsonProcessingException e) {
			logger.error("showUser Error : >>>>>>> " + e);
		}
		
		return users;
	}
	
	// 전체 User 조회
	@ResponseBody
	@GetMapping("/insertUser")
	public List<UserEntity> InsertUser() throws InvalidKeyException, UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException{
		List<UserEntity> users = new ArrayList<>();
		try {
			users = userRepository.findAll();
			ObjectMapper mapper = new ObjectMapper();
			logger.info("User 전체 조회 logger : " + mapper.writeValueAsString(users));
			String pw = users.get(0).getUserPwd();
//			logger.info("UserPwd 조회 logger : " + pw);
			String encodePw = AES256Util.enCode(pw);
			logger.info("encodePwd 조회 logger : " + encodePw);
			users = userRepository.findByUserId("Test");
			String user = users.get(0).getUserId();
			logger.info("User 조회 logger : " + user);
			
			if(userRepository.findById("testtest").isPresent()) {
				logger.info("동일한 값이 이미 있습니");
			}else {
				UserEntity userEntity = UserEntity.builder().userPwd(encodePw).custCode("C000000003").userId("testtest").build();
				logger.info("userEntity 조회 logger : " + userEntity);
				userRepository.save(userEntity);
			}
		} catch (JsonProcessingException e) {
			logger.error("showUser Error : >>>>>>> " + e);
		}
		return users;
	}
}
