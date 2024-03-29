package brokurly.project.backoffice.repository.product;

import brokurly.project.backoffice.entity.user.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import brokurly.project.backoffice.entity.product.ReviewEntity;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewEntity, Integer>, JpaSpecificationExecutor<ReviewEntity> {
    ReviewEntity findByReviewSeqNo(int reviewSeqNo);

    @Modifying
    @Query("delete from ReviewEntity r where r.reviewSeqNo in :reviewSeqId")
    void deleteAllByIds(@Param("reviewSeqId") List<Integer> reviewSeqId);
}
