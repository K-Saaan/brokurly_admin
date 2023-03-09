package brokurly.project.backoffice.repository.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import brokurly.project.backoffice.entity.product.ProductDtlEntity;

public interface ProductDtlRepository extends JpaRepository<ProductDtlEntity, String> {
	List<ProductDtlEntity> findByPdCode(String pdCode);
}
