package brokurly.project.backoffice.repository.product;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import brokurly.project.backoffice.entity.product.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, String>, JpaSpecificationExecutor<ProductEntity> {
	List<ProductEntity> findByPdnm(String pdnm); // 상품이름 조회조건으로 조회
	int countByPdnm(String pdnm); // 상품이름 조회조건으로 해당 row 카운트 세기
	
	@Query(value = "SELECT SALES_UNIT, COUNT(SALES_UNIT) as CNT, SUM(PD_PRICE) as SUM from pd.pd_info group by SALES_UNIT", nativeQuery=true)
	List<Object[]> showBySalesunit();
	
	// 상품 카테고리별 상품가 총합
	@Query(value = "SELECT c.CATE_NM, sum(p.PD_PRICE) as sum FROM pd.pd_info p, pd.pd_cate c where p.PD_CODE = c.PD_CODE group by c.CATE_NM", nativeQuery=true)
	List<Object[]> showSumOfProduct();
}
