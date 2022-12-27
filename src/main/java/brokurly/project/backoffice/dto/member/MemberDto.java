package brokurly.project.backoffice.dto.member;

import brokurly.project.backoffice.entity.member.MemberEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 아무런 값도 갖지 않는 의미 없는 객체의 생성을 막아줌
public class MemberDto {
	private String custcode;
	private String custnm;
	private String custemail;
	private String custbirth;
	private String custaddr;
	
	@Builder
	public MemberDto(String custcode, String custnm, String custemail, String custbirth, String custaddr) {
		this.custcode = custcode;
		this.custnm = custnm;
		this.custemail = custemail;
		this.custbirth = custbirth;
		this.custaddr = custaddr;
	}
	
	// DTO -> ENTITY
	public MemberEntity toEntity() {
		return MemberEntity.builder()
				.custcode(custcode)
				.custnm(custnm)
				.custemail(custemail)
				.custbirth(custbirth)
				.custaddr(custaddr)
				.build();
	}
}
