package brokurly.project.backoffice.service.user;

import org.springframework.data.jpa.domain.Specification;

import brokurly.project.backoffice.entity.user.UserEntity;

public interface UserService {
	
	Specification<UserEntity> getUserId(String userId);
	
	Specification<UserEntity> getCreateDate(String createDate);
	
	Specification<UserEntity> getLoginFailCnt(int loginFailCnt);

}
