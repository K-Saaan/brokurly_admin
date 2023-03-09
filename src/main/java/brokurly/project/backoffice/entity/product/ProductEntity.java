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
	private String pdCode;
	@Column(name = "PD_NM")
	private String pdNm;
	@Column(name = "PD_EXT")
	private String pdExt;
	@Column(name = "PD_PRICE")
	private String pdPrice;
	@Column(name = "DELI_TYPE")
	private String deliType;
	@Column(name = "DELI_EXT")
	private String deliExt;
	@Column(name = "PD_SELLER")
	private String pdSeller;
	@Column(name = "PAKG_TYPE")
	private String pakgType;
	@Column(name = "PAKG_EXT")
	private String pakgExt;
	@Column(name = "SALES_UNIT")
	private String salesUnit;
	@Column(name = "PD_WEG")
	private String pdWeg;
	@Column(name = "PD_SWEET")
	private String pdSweet;
	@Column(name = "ORG_LOC")
	private String orgLoc;
	@Column(name = "ALERG_INFO")
	private String alergInfo;
	@Column(name = "EXP_DATE")
	private String expDate;
	@Column(name = "EXT_INFO")
	private String extInfo;
	@Column(name = "REG_ID")
	private String regId;
	@Column(name = "REG_DATE")
	private Timestamp regDate;
	@Column(name = "CHGR_ID")
	private String chgrId;
	@Column(name = "CHGR_DATE")
	private Timestamp chgrDate;
	
}
