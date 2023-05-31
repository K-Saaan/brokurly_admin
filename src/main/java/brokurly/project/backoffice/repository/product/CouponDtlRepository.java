package brokurly.project.backoffice.repository.product;

import java.util.List;
import brokurly.project.backoffice.entity.product.CouponDtlEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CouponDtlRepository extends JpaRepository<CouponDtlEntity, String> {
    List<CouponDtlEntity> findByCpnCode(String cpnCode);
}
