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
@Table(name = "login_hist", catalog = "co")
public class LoginHistEntity {
	
	@Column(name = "USER_ID")
	private String userId;
	
	@Id
	@Column(name = "LOGIN_DATE")
	private String loginDate;
	
	@Column(name = "REG_ID")
	private String regId;
	
	@Column(name = "REG_DATE")
	private String regDate;
	
	@Column(name = "CHGR_ID")
	private String chgrId;
	
	@Column(name = "CHGR_DATE")
	private String chgrDate;

}
