package brokurly.project.backoffice.repository.member;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

import brokurly.project.backoffice.entity.member.MemberDtlEntity;

public interface MemberDtlRepository extends JpaRepository<MemberDtlEntity, String> {
	List<MemberDtlEntity> findByCustCode(String custCode);
}
