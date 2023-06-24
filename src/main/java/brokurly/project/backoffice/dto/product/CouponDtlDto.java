package brokurly.project.backoffice.dto.product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
//@AllArgsConstructor
//@Builder
public class CouponDtlDto {
    private String cpnCode;
    private String pdCode;
    private String useYn;
    private String regId;
    private LocalDateTime regDate;
    private String chgrId;
    private LocalDateTime chgrDate;
    private String pdNm;

    @Builder
    public CouponDtlDto(String cpnCode, String pdCode, String useYn, String regId,
                        LocalDateTime regDate, String chgrId, LocalDateTime chgrDate, String pdNm) {
        this.cpnCode = cpnCode;
        this.pdCode = pdCode;
        this.useYn = useYn;
        this.regId = regId;
        this.regDate = regDate;
        this.chgrId = chgrId;
        this.chgrDate = chgrDate;
        this.pdNm = pdNm;
    }
}
