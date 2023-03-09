package brokurly.project.backoffice.service.product.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import brokurly.project.backoffice.entity.member.MemberEntity;
import brokurly.project.backoffice.entity.product.ProductEntity;
import brokurly.project.backoffice.entity.product.ReviewEntity;
import brokurly.project.backoffice.repository.product.ProductRepository;
import brokurly.project.backoffice.service.product.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	private  final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private ProductRepository productRepository;
	
	// 상품 조회 화면 조회조건
	// 상품 이름 조회조건
	@Override
	public Specification<ProductEntity> getByPdnm(String pdnm) {
		return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("pdnm"), "%" + pdnm + "%");
	}
	// 포장타입 조회조건
	@Override
	public Specification<ProductEntity> getByPakgtype(String pakgtype) {
		return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("pakgtype"), "%" + pakgtype + "%");
	}
	
	// 후기 조회 화면 조회조건
	// 상품 이름 조회조건
	@Override
	public Specification<ReviewEntity> getByPdNm(String pdNm) {
		return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("pdNm"), "%" + pdNm + "%");
	}
	// 포장타입 조회조건
	@Override
	public Specification<ReviewEntity> getByCustNm(String custNm) {
		return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("custNm"), "%" + custNm + "%");
	}
}
