package brokurly.project.backoffice.repository.product;

import brokurly.project.backoffice.entity.product.CateInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CateInfoRepository extends JpaRepository<CateInfoEntity, String> {
    List<CateInfoEntity> findByUpperCateCodeIsNull();

    List<CateInfoEntity> findByUpperCateCode(String upperCateCode);
}
