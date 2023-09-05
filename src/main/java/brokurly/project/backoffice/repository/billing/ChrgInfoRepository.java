package brokurly.project.backoffice.repository.billing;

import brokurly.project.backoffice.dto.order.ChrgPayInfoDto;
import brokurly.project.backoffice.entity.billing.ChrgInfoEntity;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ChrgInfoRepository extends JpaRepository<ChrgInfoEntity, Integer>, JpaSpecificationExecutor<ChrgInfoEntity> {
    @Query("select new brokurly.project.backoffice.dto.order.ChrgPayInfoDto(c.chrgSeqNo, c.pymAcntCode," +
            "c.custCode, c.odCode, c.pymTyp, c.payWay, c.payStat, c.cnclYn, c.chrgDate, c.bankCd," +
            "c.bankNm, c.cardNo, c.cardDueYy, c.cardDueMm, c.acntNo, c.acntHolder, c.chrgAmt," +
            "p.rcptAmt, c.vat, c.fee, c.regId, c.regDate, c.chgrId, c.chgrDate) " +
            "from ChrgInfoEntity c " +
            "left outer join PayInfoEntity p " +
            "on c.chrgSeqNo = p.chrgSeqNo " +
            "where c.odCode like concat('%', :odCode, '%') ")
    Page<ChrgPayInfoDto> showChrgAndPayInfo(@Param("odCode") String odCode, Pageable pageable);
}
