package brokurly.project.backoffice.repository.product;

import brokurly.project.backoffice.entity.product.CouponEntity;
import brokurly.project.backoffice.entity.product.QnaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CouponRepository extends JpaRepository<CouponEntity, String>, JpaSpecificationExecutor<CouponEntity> {
    List<CouponEntity> findByCpnCode(String cpnCode);
    CouponEntity findTop1ByOrderByCpnCodeDesc();
}
