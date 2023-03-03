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
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "review", catalog="pd")
public class ReviewEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "REVIEW_SEQ_NO")
	private int reviewSeqNo;
	@Column(name = "USER_ID")
	private String userId;
	@Column(name = "CUST_CODE")
	private String custCode;
	@Column(name = "CUST_NM")
	private String custNm;
	@Column(name = "PD_CODE")
	private String pdCode;
	@Column(name = "PD_NM")
	private String pdNm;
	@Column(name = "REVIEW_DATE")
	private String reviewDate;
	@Column(name = "REVIEW_TXT")
	private String reviewTxt;
	@Column(name = "REVIEW_LIKE")
	private int reviewLike;
	@Column(name = "REG_ID")
	private String regId;
	@Column(name = "REG_DATE")
	private Timestamp regDate;
	@Column(name = "CHGR_ID")
	private String chgrId;
	@Column(name = "CHGR_DATE")
	private Timestamp chgrDate;
	@Column(name = "PD_NAME")
	private String pdName;
}
