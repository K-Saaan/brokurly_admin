package brokurly.project.backoffice.service.order;

import brokurly.project.backoffice.entity.order.DeliLocInfoEntity;
import org.springframework.data.jpa.domain.Specification;

public interface DeliLocInfoService {
    Specification<DeliLocInfoEntity> getByCustCode(String custCode);
}
