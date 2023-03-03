package brokurly.project.backoffice.repository.mng;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import brokurly.project.backoffice.entity.mng.MngEntity;

@Repository
public interface MngRepository extends JpaRepository<MngEntity, String>, JpaSpecificationExecutor<MngEntity>{
	
	MngEntity findByMngId(String mngId);
	
	@Query(value = "select * from cs.mng_info where MNG_ID = :mngId and MNG_PWD = :mngPwd", nativeQuery=true)
	MngEntity findByMng(@Param("mngId") String mngId, @Param("mngPwd") String mngPwd);

}
