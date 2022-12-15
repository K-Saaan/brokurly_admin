package brokurly.project.backoffice.service.common;

import java.util.Map;
import javax.servlet.http.HttpServletRequest;


public interface LoginService {
	

	public Map<String, Object> updateLogin(String id, String pwd, HttpServletRequest request);
}
