package brokurly.project.backoffice.repository.member;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import brokurly.project.backoffice.entity.member.MemberEntity;

public interface MemberRepository extends JpaRepository<MemberEntity, String> {
	List<MemberEntity> findByCustcode(String custcode); // 고객코드 조회조건으로 조회
	List<MemberEntity> findByCustnm(String custnm); // 고객이름 조회조건으로 조회
	int countByCustnm(String custnm); // 고객이름 조회조건으로 해당 row 카운트 세기
}
