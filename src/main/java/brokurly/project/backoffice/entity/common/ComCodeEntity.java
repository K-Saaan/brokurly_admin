package brokurly.project.backoffice.entity.common;

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
@Table(name = "com_code", catalog="co")
public class ComCodeEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "CODE_SEQ")
	private int codeSeq;
	@Column(name = "CODE")
	private String code;
	@Column(name = "LABEL")
	private String label;
	@Column(name = "CATEGORY")
	private String category;
	@Column(name = "INDEX")
	private int index;
	@Column(name = "REG_ID")
	private String regId;
	@Column(name = "REG_DATE")
	private Timestamp regDate;
}
