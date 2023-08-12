package brokurly.project.backoffice.repository.billing;

import brokurly.project.backoffice.entity.billing.PymAcntInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PymAcntInfoRepository extends JpaRepository<PymAcntInfoEntity, String> {

}
