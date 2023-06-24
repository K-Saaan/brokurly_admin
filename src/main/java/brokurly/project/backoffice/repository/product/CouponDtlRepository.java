package brokurly.project.backoffice.repository.product;

import java.util.List;

import brokurly.project.backoffice.dto.product.CouponDtlDto;
import brokurly.project.backoffice.entity.product.CouponDtlEntity;
import brokurly.project.backoffice.entity.product.CouponList;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CouponDtlRepository extends JpaRepository<CouponDtlEntity, CouponList> {
    List<CouponDtlEntity> findByCpnCode(String cpnCode);

    @Query("select new brokurly.project.backoffice.dto.product.CouponDtlDto(c.cpnCode, c.pdCode, c.useYn, c.regId, c.regDate, c.chgrId, c.chgrDate, p.pdNm) from CouponDtlEntity c join ProductEntity p on c.pdCode = p.pdCode where c.cpnCode = :cpnCode")
    List<CouponDtlDto> showCpnPdInfo(@Param("cpnCode") String cpnCode);

    @Query(value = "delete from pd.cpn_dtl c where c.cpnCode = :cpnCode and c.pdCode in :pdCode", nativeQuery = true)
    void deleteByCpnCodeAndPdCode(@Param("cpnCode") String cpnCode, @Param("pdCode") List<String> pdCode);
}