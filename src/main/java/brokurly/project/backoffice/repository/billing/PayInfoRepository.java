package brokurly.project.backoffice.repository.billing;

import brokurly.project.backoffice.entity.billing.PayInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PayInfoRepository extends JpaRepository<PayInfoEntity, Integer> {

}
