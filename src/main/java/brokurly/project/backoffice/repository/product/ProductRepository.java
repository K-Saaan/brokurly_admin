package brokurly.project.backoffice.repository.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import brokurly.project.backoffice.entity.product.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, String>, JpaSpecificationExecutor<ProductEntity> {
	List<ProductEntity> findByPdnm(String pdnm); // 상품이름 조회조건으로 조회
	int countByPdnm(String pdnm); // 상품이름 조회조건으로 해당 row 카운트 세기
}
