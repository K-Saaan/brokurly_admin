package brokurly.project.backoffice.service.product;

import org.springframework.data.jpa.domain.Specification;

import brokurly.project.backoffice.entity.product.ReviewEntity;

import java.util.List;

public interface ReviewService {
	// 후기 조회 화면
	Specification<ReviewEntity> getByPdNm(String pdNm); // 조회조건 상품이름
	Specification<ReviewEntity> getByCustNm(String custNm); // 조회조건 고객이름
	public int deleteReview(List<Integer> reviewSeqId); // 리뷰 멀티삭제
}
