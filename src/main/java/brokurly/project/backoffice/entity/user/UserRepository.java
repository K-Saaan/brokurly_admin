package brokurly.project.backoffice.entity.user;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String>{
	
	List<UserEntity> findByUserId(String userId);
	
	@Query(value = "select * from co.user_info where USER_ID = :userId and USER_PWD = :userPwd", nativeQuery=true)
	List<UserEntity> findByUser(@Param("userId") String userId, @Param("userPwd") String userPwd);

}
