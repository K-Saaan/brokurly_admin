package brokurly.project.backoffice.repository.mbrsh;

import brokurly.project.backoffice.dto.mbrsh.MbrshInfoDto;
import brokurly.project.backoffice.entity.mbrsh.MbrshInfoEntity;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MbrshInfoRepository extends JpaRepository<MbrshInfoEntity, String> {
    @Query("select new brokurly.project.backoffice.dto.mbrsh.MbrshInfoDto(c.custCode, md.reserveRatio, md.mbrshGradeNm) " +
            "from MbrshInfoEntity m " +
            "join MemberEntity c " +
            "on m.custCode = c.custCode " +
            "join MbrshDtlEntity md " +
            "on m.currMbrshGrade = md.mbrshGrade " +
            "where c.custCode = :custCode ")
    List<MbrshInfoDto> calcMbrshInfo(@Param("custCode") String custCode);
}
