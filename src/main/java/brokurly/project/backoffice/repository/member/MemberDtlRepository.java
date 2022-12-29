package brokurly.project.backoffice.repository.member;

import org.springframework.data.jpa.repository.JpaRepository;

import brokurly.project.backoffice.entity.member.MemberDtlEntity;

import java.util.List;

public interface MemberDtlRepository extends JpaRepository<MemberDtlEntity, Long> {
	List<MemberDtlEntity> findByCustCode(String custCode);
}
