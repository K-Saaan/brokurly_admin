package brokurly.project.backoffice.service.user.impl;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import brokurly.project.backoffice.entity.user.UserEntity;
import brokurly.project.backoffice.service.user.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	
	public Specification<UserEntity> getUserId(String userId){
		return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("userId"), userId);
	}
	
	public Specification<UserEntity> getCreateDate(String createDate){
		return (root, query, criteriaBuilder) -> criteriaBuilder.greaterThan(root.get("createDate"), createDate);
	}

	public Specification<UserEntity> getLoginFailCnt(int loginFailCnt){
		return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("loginFailCnt"), loginFailCnt);
	}
	
}
