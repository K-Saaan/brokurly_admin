package brokurly.project.backoffice.service.product;

import java.util.Map;

public interface ProductService {
	public Map<String, Object> findAllProduct(); // 조회조건없이 모든 고객 조회
	public Map<String, Object> findProductByName(String pdnm); // 고객이름 조회조건으로 조회
	public int countByPdnm(String pdnm);
}
