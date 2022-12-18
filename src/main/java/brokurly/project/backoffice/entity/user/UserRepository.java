package brokurly.project.backoffice.entity.user;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, String>{
	
	List<UserEntity> findByUserId(String userId);
	
	UserEntity findByUser(String userId, String userPwd);

}
