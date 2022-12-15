package brokurly.project.backoffice.entity.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "user_info", catalog = "co")
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String userId;
	
	@Column(name = "CUST_CODE")
	private String custCode;
	@Column(name = "CREATE_DATE")
	private String createDate;
	@Column(name = "END_DATE")
	private String endDate;
	@Column(name = "USER_PWD")
	private String userPwd;
	@Column(name = "PWD_EXP_DATE")
	private String pwdExpDate;
	@Column(name = "LOGIN_FAIL_CNT")
	private String loginFailCnt;
	@Column(name = "RECMD_ID")
	private String recmdId;
	@Column(name = "EVENT_NM")
	private String eventNm;
	@Column(name = "REG_ID")
	private String regId;
	@Column(name = "REG_DATE")
	private String regDate;
	@Column(name = "CHGR_ID")
	private String chgrId;
	@Column(name = "CHGR_DATE")
	private String chgrDate;
	
}
