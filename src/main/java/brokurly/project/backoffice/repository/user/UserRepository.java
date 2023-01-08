package brokurly.project.backoffice.repository.user;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import brokurly.project.backoffice.entity.user.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String>, JpaSpecificationExecutor<UserEntity>{
	
	List<UserEntity> findByUserId(String userId);
	
	@Query(value = "select * from co.user_info where USER_ID = :userId and USER_PWD = :userPwd", nativeQuery=true)
	List<UserEntity> findByUser(@Param("userId") String userId, @Param("userPwd") String userPwd);

}
