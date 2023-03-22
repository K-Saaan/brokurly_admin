package brokurly.project.backoffice.repository.member;

import java.util.List;

import brokurly.project.backoffice.entity.product.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import brokurly.project.backoffice.entity.member.MemberEntity;

public interface MemberRepository extends JpaRepository<MemberEntity, String>, JpaSpecificationExecutor<MemberEntity> {
    List<MemberEntity> findByCustCode(String custCode); // 고객코드 조회조건으로 조회
}
