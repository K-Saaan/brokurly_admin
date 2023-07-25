package brokurly.project.backoffice.dto.mbrsh;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Getter
@NoArgsConstructor
public class MbrshInfoDto {
    private String custCode;
    private BigDecimal reserveRatio;
    private String mbrshGradeNm;

    @Builder
    public MbrshInfoDto(String custCode, BigDecimal reserveRatio, String mbrshGradeNm) {
        this.custCode = custCode;
        this.reserveRatio = reserveRatio;
        this.mbrshGradeNm = mbrshGradeNm;
    }
}
