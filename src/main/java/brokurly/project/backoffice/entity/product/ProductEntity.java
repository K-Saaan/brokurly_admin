package brokurly.project.backoffice.entity.product;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import brokurly.project.backoffice.entity.member.MemberEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "pd_info", catalog="pd")
public class ProductEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PD_CODE")
	private String pdcode;
	@Column(name = "PD_NM")
	private String pdnm;
	@Column(name = "PD_EXT")
	private String pdext;
	@Column(name = "PD_PRICE")
	private String pdprice;
	@Column(name = "DELI_TYPE")
	private String delitype;
	@Column(name = "DELI_EXT")
	private String deliext;
	@Column(name = "PD_SELLER")
	private String pdseller;
	@Column(name = "PAKG_TYPE")
	private String pakgtype;
	@Column(name = "PAKG_EXT")
	private String pakgext;
	@Column(name = "SALES_UNIT")
	private String salesunit;
	@Column(name = "PD_WEG")
	private String pdweg;
	@Column(name = "PD_SWEET")
	private String pdsweet;
	@Column(name = "ORG_LOC")
	private String orgloc;
	@Column(name = "ALERG_INFO")
	private String alerginfo;
	@Column(name = "EXP_DATE")
	private String expdate;
	@Column(name = "EXT_INFO")
	private String extinfo;
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
	public ProductEntity(String pdcode, String pdnm, String pdext, String pdprice, String delitype,
			String deliext, String pdseller, String pakgtype, String pakgext, String salesunit,
			String pdweg, String pdsweet, String orgloc, String alerginfo,
			String expdate, String extinfo, String regid, Timestamp regdate, String chgrid, Timestamp chgrdate) {
		this.pdcode = pdcode;
		this.pdnm = pdnm;
		this.pdext = pdext;
		this.pdprice = pdprice;
		this.delitype = delitype;
		this.deliext = deliext;
		this.pdseller = pdseller;
		this.pakgtype = pakgtype;
		this.pakgext = pakgext;
		this.salesunit = salesunit;
		this.pdweg = pdweg;
		this.pdsweet = pdsweet;
		this.orgloc = orgloc;
		this.alerginfo = alerginfo;
		this.expdate = expdate;
		this.extinfo = extinfo;
		this.regid = regid;
		this.regdate = regdate;
		this.chgrid = chgrid;
		this.chgrdate = chgrdate;
	}
}
