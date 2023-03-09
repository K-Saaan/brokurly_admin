package brokurly.project.backoffice.service.product;

import java.util.Map;

import org.springframework.data.jpa.domain.Specification;

import brokurly.project.backoffice.entity.product.ProductEntity;
import brokurly.project.backoffice.entity.product.ReviewEntity;

public interface ProductService {
	// 상품 조회 화면
	Specification<ProductEntity> getByPdNm(String pdNm); // 조회조건 상품이름
	Specification<ProductEntity> getByPakgType(String pakgType); // 조회조건 포장타입
}
