package brokurly.project.backoffice.repository.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import brokurly.project.backoffice.entity.user.LoginHistEntity;

@Repository
public interface LoginHistRepository extends JpaRepository<LoginHistEntity, String>, JpaSpecificationExecutor<LoginHistEntity>{
	
}
