package brokurly.project.backoffice.repository.product;

import brokurly.project.backoffice.entity.product.CouponHistEntity;
import brokurly.project.backoffice.entity.product.CouponHistList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CouponHistRepository extends JpaRepository<CouponHistEntity, CouponHistList> {

    CouponHistEntity findByCustCodeAndCpnCode(String custCode, String cpnCode);
}
