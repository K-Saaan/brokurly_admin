package brokurly.project.backoffice.repository.billing;

import brokurly.project.backoffice.entity.billing.PymAcntInfoDtlEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PymAcntInfoDtlRepository extends JpaRepository<PymAcntInfoDtlEntity, String> {

}
