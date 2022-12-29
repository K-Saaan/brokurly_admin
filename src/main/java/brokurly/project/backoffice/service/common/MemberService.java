package brokurly.project.backoffice.service.common;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

public interface MemberService {
	public Map<String, Object> findAllMember(); // 조회조건없이 모든 고객 조회
	public Map<String, Object> findMemberByName(String custnm); // 고객이름 조회조건으로 조회
	public int countByCustnm(String custnm); // 고객이름 조회조건으로 해당 row 카운트 세기
}
