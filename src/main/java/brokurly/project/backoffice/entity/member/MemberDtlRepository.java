package brokurly.project.backoffice.entity.member;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MemberDtlRepository extends JpaRepository<MemberDtlEntity, Long> {
	List<MemberDtlEntity> findByCustCode(String custCode);
}
