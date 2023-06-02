package brokurly.project.backoffice.repository.product;

import java.util.List;
import brokurly.project.backoffice.entity.product.CouponDtlEntity;
import brokurly.project.backoffice.entity.product.CouponList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CouponDtlRepository extends JpaRepository<CouponDtlEntity, CouponList> {
    List<CouponDtlEntity> findByCpnCode(String cpnCode);
}