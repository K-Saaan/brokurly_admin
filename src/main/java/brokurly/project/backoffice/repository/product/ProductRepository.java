package brokurly.project.backoffice.repository.product;

import java.util.List;

import brokurly.project.backoffice.dto.product.ProductCateDto;
import brokurly.project.backoffice.dto.product.ProductReviewDto;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import brokurly.project.backoffice.entity.product.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity, String>, JpaSpecificationExecutor<ProductEntity> {
	@Query(value = "SELECT SALES_UNIT, COUNT(SALES_UNIT) as CNT, SUM(PD_PRICE) as SUM from pd.pd_info group by SALES_UNIT", nativeQuery=true)
	List<Object[]> showBySalesUnit();
	
	// 상품 카테고리별 상품가 총합
	@Query(value = "SELECT c.CATE_NM, sum(p.PD_PRICE) as sum FROM pd.pd_info p, pd.pd_cate c where p.PD_CODE = c.PD_CODE group by c.CATE_NM", nativeQuery=true)
	List<Object[]> showSumOfProduct();

	// 상품, 리뷰 테이블 조인 조회. 상품코드, 상품이름, 리뷰내용만 조회.
	@Query("select new brokurly.project.backoffice.dto.product.ProductReviewDto(p.pdCode, p.pdNm, r.reviewTxt) from ProductEntity p join ReviewEntity r on p.pdCode = r.pdCode")
	Page<ProductReviewDto> showProductAndReview(Pageable pageable);

//	@Query(value = "SELECT DISTINCT p.PD_CODE, p.PD_NM " +
//			"FROM pd.pd_info p, pd.pd_cate pc " +
//			"WHERE p.PD_CODE = pc.PD_CODE " +
//			"AND ( :bigCate IS NULL OR pc.CATE_CODE IN ( " +
//				" SELECT c.CATE_CODE " +
//				" FROM pd.cate_info c " +
//				" WHERE c.upper_cate_code = :bigCate )) " +
//			"AND ( :smallCate IS NULL OR pc.CATE_CODE = :smallCate ) " +
//			"AND ( :pdNm IS NULL OR p.PD_NM = :pdNm )", nativeQuery = true)
//	Lisg<Object[]> showProductWithCate(@Param("pdNm") String pdNm, @Param("bigCate") String bigCate, @Param("smallCate") String smallCate, Pageable pageable);

	@Query("select distinct new brokurly.project.backoffice.dto.product.ProductCateDto(p.pdCode, p.pdNm) from ProductEntity p join ProductCateEntity pc " +
			"on p.pdCode = pc.pdCode " +
			"where ( :pdNm is null or p.pdNm = :pdNm ) " +
//			"and ( :bigCate is null or pc.cateCode in ( select c.cateCode from c where c.upperCateCode = :bigCate ) )" +
			"and ( :smallCate is null or pc.cateCode = :smallCate ) ")
	Page<ProductCateDto> showProductWithCate(@Param("pdNm") String pdNm, @Param("smallCate") String smallCate, Pageable pageable);

}
