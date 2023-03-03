package brokurly.project.backoffice.controller.mng;

import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import brokurly.project.backoffice.common.AES256Util;
import brokurly.project.backoffice.entity.mng.MngEntity;
import brokurly.project.backoffice.repository.mng.MngRepository;
import brokurly.project.backoffice.service.login.MngService;
import lombok.RequiredArgsConstructor;

@RestController // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/mng")
public class MngController {

	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	
	private final MngRepository mngRepository;
	
	private final MngService mngService;
	
	@Value("${key.aesKey}")
	private String key;
	
	// 전체 Mng 조회
	@ResponseBody
	@GetMapping("/showMng")
	public List<MngEntity> findAllMng() throws InvalidKeyException, UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException{
		List<MngEntity> mngs = new ArrayList<>();
		try {
			mngs = mngRepository.findAll();
			MngEntity mng =  mngs.get(0);
			Specification<MngEntity> spec = (root, query, criteriaBuilder) -> null;
//			String mngId = mng.getMngId();
			String mngId = null;
			String createDate = mng.getCreateDate();
//			String createDate = null;
			int loginFailCnt = mng.getLoginFailCnt();
			
			if(mngId != null) {
				spec = spec.and(mngService.getMngId(mngId));
			}else if(createDate != null) {
				spec = spec.and(mngService.getCreateDate(createDate));
			}else {
				spec = spec.and(mngService.getLoginFailCnt(loginFailCnt));
			}
			List<MngEntity> specMng = mngRepository.findAll(spec);
			
			ObjectMapper mapper = new ObjectMapper();
			logger.info("spec : "+ mapper.writeValueAsString(specMng));
		} catch (Exception e) {
			logger.error("showMng Error : >>>>>>> " + e);
		}
		
		return mngs;
	}
	
	// 전체 Mng 조회
	@ResponseBody
	@GetMapping("/insertMng")
	public List<MngEntity> InsertMng() throws InvalidKeyException, UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException{
		List<MngEntity> mngs = new ArrayList<>();
		try {
			mngs = mngRepository.findAll();
			ObjectMapper mapper = new ObjectMapper();
			logger.info("Mng 전체 조회 logger : " + mapper.writeValueAsString(mngs));
			String pw = mngs.get(0).getMngPwd();
			logger.info("MngPwd 조회 logger : " + pw);
			String encodePw = AES256Util.enCode("brokurly12", key);
			String test = AES256Util.enCode("test", key);
			logger.info("encodePwd 조회 logger : " + encodePw);
			logger.info("encodePwd 조회 logger : " + test);
//			mngs = mngRepository.findByMngId("Test");
			String mng = mngs.get(0).getMngId();
			logger.info("Mng 조회 logger : " + mng);
			
//			if(mngRepository.findById("testtest").isPresent()) {
//				logger.info("동일한 값이 이미 있습니");
//			}else {
//				MngEntity mngEntity = MngEntity.builder().mngPwd(encodePw).mngId("testtest").build();
//				logger.info("mngEntity 조회 logger : " + mngEntity);
//				mngRepository.save(mngEntity);
//			}
		} catch (JsonProcessingException e) {
			logger.error("showMng Error : >>>>>>> " + e);
		}
		return mngs;
	}
}
