package brokurly.project.backoffice.service.member;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import brokurly.project.backoffice.dto.member.MemberDto;
import brokurly.project.backoffice.entity.member.MemberEntity;
import brokurly.project.backoffice.entity.product.ProductEntity;
import org.springframework.data.jpa.domain.Specification;

public interface MemberService {
	public int update(String custCode, MemberDto memberdto); // update member
	Specification<MemberEntity> getByCustNm(String custNm); // 조회조건 고객이름
}
