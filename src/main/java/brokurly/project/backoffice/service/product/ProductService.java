package brokurly.project.backoffice.service.product;

import java.util.Map;

import org.springframework.data.jpa.domain.Specification;

import brokurly.project.backoffice.entity.product.ProductEntity;

public interface ProductService {
	public Map<String, Object> findAllProduct(); // 조회조건없이 모든 고객 조회
	public Map<String, Object> findProductByName(String pdnm); // 고객이름 조회조건으로 조회
	public int countByPdnm(String pdnm);
	Specification<ProductEntity> getByPdnm(String pdnm); // 조회조건 상품이름
	Specification<ProductEntity> getByPakgtype(String pakgtype); // 조회조건 포장타입
}
