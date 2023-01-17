package brokurly.project.backoffice.entity.product;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 아무런 값도 갖지 않는 의미 없는 객체의 생성을 막아줌
@Table(name = "pd_info_dtl", catalog = "pd")
public class ProductDtlEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "PD_CODE")
	private String pdcode;
	
	@Column(name = "SALE_CODE")
	private String salecode;
	@Column(name = "CPN_CODE")
	private String cpncode;
	@Column(name = "DISC_YN")
	private String discyn;
	@Column(name = "CPN_YN")
	private String cpnyn;
	@Column(name = "REG_ID")
	private String regid;
	@Column(name = "REG_DATE")
	private String regdate;
	@Column(name = "CHGR_ID")
	private String chgrid;
	@Column(name = "CHGR_DATE")
	private String chgrdate;
}
