package brokurly.project.backoffice.repository.common;

import java.util.List;

import brokurly.project.backoffice.dto.co.ComCodeListDto;
import brokurly.project.backoffice.entity.common.ComCodeList;
import org.springframework.data.jpa.repository.JpaRepository;
import brokurly.project.backoffice.entity.common.ComCodeEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ComCodeRepository extends JpaRepository<ComCodeEntity, ComCodeList> {

    @Query("select new brokurly.project.backoffice.dto.co.ComCodeListDto(c.comCd, c.comCdNm) from ComCodeEntity c where c.comCodeList.comCdGrpId = :comCdGrpId order by c.index")
    List<ComCodeListDto> findAllByComCdGrpId(String comCdGrpId);
}
