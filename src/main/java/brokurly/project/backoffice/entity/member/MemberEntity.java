package brokurly.project.backoffice.entity.member;

import java.sql.Date;
import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "cust_info", catalog = "cs")
public class MemberEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name = "CUST_CODE")
	private String custcode;
	@Column(name = "CUST_GRADE_CODE")
	private String custgradecode;
	@Column(name = "DELI_LOC_CODE")
	private String deliloccode;
	@Column(name = "CUST_NM")
	private String custnm;
	@Column(name = "CUST_TEL")
	private String custtel;
	@Column(name = "CUST_EMAIL")
	private String custemail;
	@Column(name = "CUST_BIRTH")
	private String custbirth;
	@Column(name = "CUST_ADDR")
	private String custaddr;
	@Column(name = "CUST_ADDR_DTL")
	private String custaddrdtl;
	@Column(name = "REG_ID")
	private String regid;
	@Column(name = "REG_DATE")
	private Timestamp regdate;
	@Column(name = "CHGR_ID")
	private String chgrid;
	@Column(name = "CHGR_DATE")
	private Timestamp chgrdate;
	
	// new 예약어를 사용하는 생성자의 경우 파라미터 파악이 힘드므로 @Builder 사용
	@Builder
	public MemberEntity(String custcode, String custgrad, String delilocc, String custnm,
			String custtel, String custemail, String custbirth, String custaddr, String custaddrdtl, String regid,
			Timestamp regdate, String chgrid, Timestamp chgrdate) {
		this.custcode = custcode;
		this.custgradecode = custgradecode;
		this.deliloccode = deliloccode;
		this.custnm = custnm;
		this.custtel = custtel;
		this.custemail = custemail;
		this.custbirth = custbirth;
		this.custaddr = custaddr;
		this.custaddrdtl = custaddrdtl;
		this.regid = regid;
		this.regdate = regdate;
		this.chgrid = chgrid;
		this.chgrdate = chgrdate;
	}
}
