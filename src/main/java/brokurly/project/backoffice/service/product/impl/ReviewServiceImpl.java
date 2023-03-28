package brokurly.project.backoffice.service.product.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import brokurly.project.backoffice.entity.product.ReviewEntity;
import brokurly.project.backoffice.repository.product.ReviewRepository;
import brokurly.project.backoffice.service.product.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService {
	private  final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private ReviewRepository reviewRepository;
	
	// 후기 조회 화면 조회조건
	// 상품 이름 조회조건
	@Override
	public Specification<ReviewEntity> getByPdNm(String pdNm) {
		return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("pdNm"), "%" + pdNm + "%");
	}
	// 고객이름 조회조건
	@Override
	public Specification<ReviewEntity> getByCustNm(String custNm) {
		return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("custNm"), "%" + custNm + "%");
	}
}
