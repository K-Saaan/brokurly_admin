package brokurly.project.backoffice.service.product;

import java.util.Map;

import org.springframework.data.jpa.domain.Specification;

import brokurly.project.backoffice.entity.product.ProductEntity;
import brokurly.project.backoffice.entity.product.ReviewEntity;

public interface ProductService {
	// 상품 조회 화면
	Specification<ProductEntity> getByPdnm(String pdnm); // 조회조건 상품이름
	Specification<ProductEntity> getByPakgtype(String pakgtype); // 조회조건 포장타입
	// 후기 조회 화면
	Specification<ReviewEntity> getByPdNm(String pdNm); // 조회조건 상품이름
	Specification<ReviewEntity> getByCustNm(String custNm); // 조회조건 고객이름
}
