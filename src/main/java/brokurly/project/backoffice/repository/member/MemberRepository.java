package brokurly.project.backoffice.repository.member;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import brokurly.project.backoffice.entity.member.MemberEntity;

public interface MemberRepository extends JpaRepository<MemberEntity, String> {
	List<MemberEntity> findByCustCode(String custCode); // 고객코드 조회조건으로 조회
	List<MemberEntity> findByCustNm(String custNm); // 고객이름 조회조건으로 조회
	int countByCustNm(String custNm); // 고객이름 조회조건으로 해당 row 카운트 세기
}
