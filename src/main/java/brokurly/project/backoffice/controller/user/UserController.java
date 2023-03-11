package brokurly.project.backoffice.controller.user;

import brokurly.project.backoffice.common.AES256Util;
import brokurly.project.backoffice.entity.member.MemberEntity;
import brokurly.project.backoffice.entity.product.ReviewEntity;
import brokurly.project.backoffice.repository.member.MemberRepository;
import brokurly.project.backoffice.repository.product.ReviewRepository;
import brokurly.project.backoffice.repository.user.UserRepository;
import brokurly.project.backoffice.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.util.List;

@RestController // ResponseBody 필요없음
@RequiredArgsConstructor // final 객체를 Constructor Injection 해줌. Autowired 필요없음
@RequestMapping("/user")
public class UserController {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    private final UserRepository userRepository;
    private final UserService userService;
    private final ReviewRepository reviewRepository;
    private final MemberRepository memberRepository;

    @Value("${key.aesKey}")
    private String key;

    /*@ResponseBody
    @GetMapping(value = "/createUserInfo", produces = "application/json;charset=utf-8")
    public List<UserEntity> createUserInfo() throws InvalidKeyException, UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
        List<UserEntity> userList = userRepository.findAll();
        if(userList.size() > 0){
            logger.info("userList size : " + userList.size());
            String date = DateUtil.getTodayYYYYMMDD();
            for(int i=0; i<userList.size(); i++){
                String id = userList.get(i).getUserId();
                UserEntity user = userRepository.findByUserId(id);
                String pwd = AES256Util.enCode(id, key);
                logger.info("start CreateUserPwd");
                user.UpdateUserPwd(pwd, date);
                userRepository.save(user);
                logger.info("end CreateUserPwd");
            }
        }else{
            logger.info("list size = 0");
        }
        return userList;
    }*/

    @ResponseBody
    @GetMapping(value = "/createCustInfo", produces = "application/json;charset=utf-8")
    public List<ReviewEntity> createCustInfo() throws InvalidKeyException, UnsupportedEncodingException, NoSuchAlgorithmException, NoSuchPaddingException, InvalidAlgorithmParameterException, IllegalBlockSizeException, BadPaddingException {
        List<ReviewEntity> reviewList = reviewRepository.findAll();
        if(reviewList.size() > 0){
            String today = LocalDateTime.now().toString();
            for(int i=0; i<reviewList.size(); i++){
                logger.info("start userNm");
                String custCode = reviewList.get(i).getCustCode();
                String custNm = reviewList.get(i).getCustNm();
                String userId = reviewList.get(i).getUserId();
                String nm = AES256Util.enCode(custNm, key);
                String telNo = getTelNo();
                String enTelNo = AES256Util.enCode(telNo, key);
                String email = userId + "@naver.com";
                String enEmail = AES256Util.enCode(email, key);
                int day = (int)(Math.random()*(12-1)+1);
                int m = (int)(Math.random()*(28-1)+1);
                String birth = "19" + String.valueOf((int)(Math.random()*(99-65)+65)) + String.format("%02d",day) + String.format("%02d",m);
                MemberEntity member = MemberEntity.builder().custCode(custCode).custNm(nm).custTel(enTelNo).custEmail(enEmail)
                        .custBirth(birth).siteCode("").custAddrDtl("").regId("ADMIN").regDate(today)
                        .chgrId("ADMIN").chgrDate(today).build();
                memberRepository.save(member);
            }
        }
        return reviewList;
    }

    private String getTelNo() {
        String tel = "010";
        for(int i=0; i<8; i++){
            int num = (int)((Math.random()*10000)%10);
            tel += String.valueOf(num);
        }
        return tel;
    }
}
