package brokurly.project.backoffice.repository.billing;

import brokurly.project.backoffice.entity.billing.ChrgInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChrgInfoRepository extends JpaRepository<ChrgInfoEntity, Integer> {

}
