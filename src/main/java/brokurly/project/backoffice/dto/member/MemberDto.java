package brokurly.project.backoffice.dto.member;

import brokurly.project.backoffice.entity.member.MemberEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 아무런 값도 갖지 않는 의미 없는 객체의 생성을 막아줌
public class MemberDto {
	private String custnm;
	private String custemail;
	
	@Builder
	public MemberDto(String custnm, String custemail) {
		this.custnm = custnm;
		this.custemail = custemail;
	}
	
	// DTO -> ENTITY
	public MemberEntity toEntity() {
		return MemberEntity.builder()
				.custnm(custnm)
				.custemail(custemail)
				.build();
	}
}
