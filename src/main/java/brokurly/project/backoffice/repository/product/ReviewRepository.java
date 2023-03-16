package brokurly.project.backoffice.repository.product;

import brokurly.project.backoffice.entity.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import brokurly.project.backoffice.entity.product.ReviewEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewEntity, Integer>, JpaSpecificationExecutor<ReviewEntity> {
    ReviewEntity findByReviewSeqNo(int reviewSeqNo);
}
