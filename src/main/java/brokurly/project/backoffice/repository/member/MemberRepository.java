package brokurly.project.backoffice.repository.member;

import java.util.List;

import brokurly.project.backoffice.dto.member.ReserveAmtDto;
import brokurly.project.backoffice.entity.product.ProductEntity;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import brokurly.project.backoffice.entity.member.MemberEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity, String>, JpaSpecificationExecutor<MemberEntity> {
    List<MemberEntity> findByCustCode(String custCode); // 고객코드 조회조건으로 조회

    @Query("select new brokurly.project.backoffice.dto.member.ReserveAmtDto(sum(r.reserveAmt)) " +
            "from MemberEntity c " +
            "join ReserveAmtInfoEntity r " +
            "on c.custCode = r.custCode " +
            "where c.custCode = :custCode " +
            "group by c.custCode ")
    List<ReserveAmtDto> showOwnReserveAmt(@Param("custCode") String custCode);
}
