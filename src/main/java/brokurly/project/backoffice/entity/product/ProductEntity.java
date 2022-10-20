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
	@Column(name = "CATE_CODE")
	private String catecode;
	@Column(name = "PD_NM")
	private String pdnm;
	@Column(name = "PD_PRICE")
	private String pdprice;
	@Column(name = "DELI_TYPE")
	private String delitype;
	@Column(name = "PD_SELLER")
	private String pdseller;
	@Column(name = "PACK_TYPE")
	private String packtype;
	@Column(name = "SALES_UNIT")
	private String salesunit;
	@Column(name = "ORG_LOC")
	private String orgloc;
	@Column(name = "PD_WEIGHT")
	private String pdweight;
	@Column(name = "ALERG_INFO")
	private String alerginfo;
	@Column(name = "EXP_DATE_INFO")
	private String expdateinfo;
	@Column(name = "PD_EXT_INFO")
	private String pdextinfo;
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
	public ProductEntity(String pdcode, String catecode, String pdnm, String pdprice, String delitype,
			String pdseller, String packtype, String salesunit, String orgloc, String pdweight, String alerginfo,
			String expdateinfo, String pdextinfo, String regid, Timestamp regdate, String chgrid, Timestamp chgrdate) {
		this.pdcode = pdcode;
		this.catecode = catecode;
		this.pdnm = pdnm;
		this.pdprice = pdprice;
		this.delitype = delitype;
		this.pdseller = pdseller;
		this.packtype = packtype;
		this.salesunit = salesunit;
		this.orgloc = orgloc;
		this.pdweight = pdweight;
		this.alerginfo = alerginfo;
		this.expdateinfo = expdateinfo;
		this.pdextinfo = pdextinfo;
		this.regid = regid;
		this.regdate = regdate;
		this.chgrid = chgrid;
		this.chgrdate = chgrdate;
	}
}
