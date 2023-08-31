package brokurly.project.backoffice.service.order;

import brokurly.project.backoffice.entity.billing.ChrgInfoEntity;
import org.springframework.data.jpa.domain.Specification;

public interface ChrgService {
    Specification<ChrgInfoEntity> getByOdCode(String odCode);
}
