package brokurly.project.backoffice.entity.member;

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
@Table(name = "member")
public class MemberEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long pid;
	
	@Column(name = "username", nullable = false, unique = true, length = 30)
	private String username;
	
	@Column(name = "name", nullable = false, length = 100)
	private String name;
	
	// new 예약어를 사용하는 생성자의 경우 파라미터 파악이 힘드므로 @Builder 사용
	@Builder
	public MemberEntity(String username, String name) {
		this.username = username;
		this.name = name;
	}
}
