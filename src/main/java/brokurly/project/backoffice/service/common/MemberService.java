package brokurly.project.backoffice.service.common;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

public interface MemberService {
	public Map<String, Object> findAllMember();
	public Map<String, Object> findMemberByName(String custnm);
	public int countByCustnm(String custnm);
}
