package brokurly.project.backoffice.repository.login;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import brokurly.project.backoffice.entity.login.LoginHistEntity;

@Repository
public interface LoginHistRepository extends JpaRepository<LoginHistEntity, String>, JpaSpecificationExecutor<LoginHistEntity>{
	
}
