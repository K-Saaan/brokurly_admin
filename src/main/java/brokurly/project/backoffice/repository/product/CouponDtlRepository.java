package brokurly.project.backoffice.repository.product;

import java.util.List;

import brokurly.project.backoffice.dto.product.CouponDtlDto;
import brokurly.project.backoffice.entity.product.CouponDtlEntity;
import brokurly.project.backoffice.entity.product.CouponList;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface CouponDtlRepository extends JpaRepository<CouponDtlEntity, CouponList> {
    @Query("select new brokurly.project.backoffice.dto.product.CouponDtlDto(c.cpnCode, c.pdCode, c.useYn, c.regId, c.regDate, c.chgrId, c.chgrDate, p.pdNm) from CouponDtlEntity c join ProductEntity p on c.pdCode = p.pdCode where c.cpnCode = :cpnCode")
    List<CouponDtlDto> showCpnPdInfo(@Param("cpnCode") String cpnCode);

    @Transactional
    @Modifying
    @Query(value = "update pd.cpn_dtl set use_yn = :useYn where CPN_CODE = :cpnCode and PD_CODE in (:pdCode)", nativeQuery = true)
    void updateUseY(@Param("cpnCode") String cpnCode, @Param("pdCode") List<String> pdCode, @Param("useYn") String useYn);
}