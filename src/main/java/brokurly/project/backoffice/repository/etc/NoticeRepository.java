package brokurly.project.backoffice.repository.etc;

import brokurly.project.backoffice.entity.etc.NoticeEntity;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface NoticeRepository extends JpaRepository<NoticeEntity, Integer>, JpaSpecificationExecutor<NoticeEntity> {

}
