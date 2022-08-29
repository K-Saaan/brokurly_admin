package brokurly.project.backoffice.Entity.Member;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor
@Table(name = "Member")
public class MemberEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long pid;
	
	@Column(name = "username", nullable = false, unique = true, length = 30)
	private String username;
	
	@Column(name = "name", nullable = false, length = 100)
	private String name;
	
	@Builder
	public MemberEntity(String username, String name) {
		this.username = username;
		this.name = name;
	}
}
