package brokurly.project.backoffice.entity.mng;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.transaction.Transactional;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.sql.Timestamp;

@Getter
@Setter
@Entity
@AllArgsConstructor
@Builder
@ToString
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "mng_info", catalog = "cs")
public class MngEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String mngId;
	
	@Column(name = "MNG_PWD")
	private String mngPwd;
	
	@Column(name = "CREATE_DATE")
	private String createDate;
	
	@Column(name = "END_DATE")
	private String endDate;
	
	@Column(name = "PWD_EXP_DATE")
	private String pwdExpDate;
	
	@Column(name = "LOGIN_FAIL_CNT")
	private int loginFailCnt;
	
	@Column(name = "ACNT_LOCK")
	private String acntLock;
	
	@Column(name = "MAIN_URL")
	private String mainUrl;
	
	@Column(name = "BF_PWD")
	private String bfPwd;
	
	@Column(name = "REG_ID")
	private String regId;
	
	@Column(name = "REG_DATE")
	private String regDate;
	
	@Column(name = "CHGR_ID")
	private String chgrId;
	
	@Column(name = "CHGR_DATE")
	private String chgrDate;

	@Transactional
	public void LoginUpdate(int loginFailCnt, String acntLock, String chgrId, String chgrDate) {
		this.loginFailCnt = loginFailCnt;
		this.acntLock = acntLock;
		this.chgrId = chgrId;
		this.chgrDate = chgrDate;
	}
	
}
