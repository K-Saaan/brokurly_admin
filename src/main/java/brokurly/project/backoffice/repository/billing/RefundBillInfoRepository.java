package brokurly.project.backoffice.repository.billing;

import brokurly.project.backoffice.entity.billing.RefundBillInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RefundBillInfoRepository extends JpaRepository<RefundBillInfoEntity, Integer> {

}
