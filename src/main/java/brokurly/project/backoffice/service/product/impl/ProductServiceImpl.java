package brokurly.project.backoffice.service.product.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import brokurly.project.backoffice.entity.member.MemberEntity;
import brokurly.project.backoffice.entity.product.ProductEntity;
import brokurly.project.backoffice.repository.product.ProductRepository;
import brokurly.project.backoffice.service.product.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	private  final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private ProductRepository productRepository;
	
	// 전체 상품 조회
	@Override
	public Map<String, Object> findAllProduct(){
		List<ProductEntity> gridDataList = productRepository.findAll();
		Map<String, Object> result = new HashMap();
		result.put("codeList", gridDataList);
		return result;
	}
	
	// 상품 이름으로 상품 조회
	@Override
	public Map<String, Object> findProductByName(String pdnm){
		List<ProductEntity> gridDataList = productRepository.findByPdnm(pdnm);
		Map<String, Object> result = new HashMap();
		result.put("codeList", gridDataList);
		return result;
	}
	
	// 카운트 조회
	@Override
	public int countByPdnm(String pdnm){
		int countData = productRepository.countByPdnm(pdnm);
		return countData;
	}
}
