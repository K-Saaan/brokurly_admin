package brokurly.project.backoffice.repository.product;

import brokurly.project.backoffice.entity.product.QnaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QnaRepository extends JpaRepository<QnaEntity, String>, JpaSpecificationExecutor<QnaEntity> {
    List<QnaEntity> findByQnaCode(String qnaCode);
}
