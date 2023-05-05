package brokurly.project.backoffice.repository.common;

import java.util.List;

import brokurly.project.backoffice.entity.common.ComCodeMastEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import brokurly.project.backoffice.entity.common.ComCodeEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ComCodeRepository extends JpaRepository<ComCodeEntity, String> {

	@Query(value = "select COM_CD_NM from co.com_code where COM_CD_GRP_ID = :comCdGrpId", nativeQuery = true)
	List<String> findComCd(String comCdGrpId); // 카테고리로 조회

}
