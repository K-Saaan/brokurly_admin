package brokurly.project.backoffice.service.login.impl;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import brokurly.project.backoffice.entity.mng.MngEntity;
import brokurly.project.backoffice.service.login.MngService;

@Service
public class MngServiceImpl implements MngService{
	
	
	public Specification<MngEntity> getMngId(String mngId){
		return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("mngId"), mngId);
	}
	
	public Specification<MngEntity> getCreateDate(String createDate){
		return (root, query, criteriaBuilder) -> criteriaBuilder.greaterThan(root.get("createDate"), createDate);
	}

	public Specification<MngEntity> getLoginFailCnt(int loginFailCnt){
		return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("loginFailCnt"), loginFailCnt);
	}
	
}
