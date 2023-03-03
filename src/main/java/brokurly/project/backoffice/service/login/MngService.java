package brokurly.project.backoffice.service.login;

import org.springframework.data.jpa.domain.Specification;

import brokurly.project.backoffice.entity.mng.MngEntity;

public interface MngService {
	
	Specification<MngEntity> getMngId(String mngId);
	
	Specification<MngEntity> getCreateDate(String createDate);
	
	Specification<MngEntity> getLoginFailCnt(int loginFailCnt);

}
