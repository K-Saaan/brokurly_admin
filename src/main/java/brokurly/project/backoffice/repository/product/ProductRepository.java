package brokurly.project.backoffice.repository.product;

import org.springframework.data.jpa.repository.JpaRepository;

import brokurly.project.backoffice.entity.product.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {

}
