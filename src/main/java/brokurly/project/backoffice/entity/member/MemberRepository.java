package brokurly.project.backoffice.entity.member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import brokurly.project.backoffice.entity.member.MemberEntity;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
	
}
