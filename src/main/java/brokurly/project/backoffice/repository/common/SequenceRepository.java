package brokurly.project.backoffice.repository.common;

import brokurly.project.backoffice.entity.common.ComCodeEntity;
import brokurly.project.backoffice.entity.common.SequenceEntity;
import brokurly.project.backoffice.entity.product.CouponEntity;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface SequenceRepository extends JpaRepository<SequenceEntity, String>, JpaSpecificationExecutor<SequenceEntity> {
    SequenceEntity findByTblCode(String tblCode);
}
