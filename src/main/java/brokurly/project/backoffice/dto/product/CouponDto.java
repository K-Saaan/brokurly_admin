package brokurly.project.backoffice.dto.product;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 아무런 값도 갖지 않는 의미 없는 객체의 생성을 막아줌
public class CouponDto {
    private String cpnCode;
    private String cpnGubun;
    private String cpnNm;
    private String cpnStat;
    private String createDate;
    private String endDate;
    private String cpnPrice;
    private String cpnRatio;
    private String minOdAmt;
    private String maxAmt;
    private String dtlDesc;
    private String useReq;
    private String chgrId;
    private Timestamp chgrDate;

    @Builder
    public CouponDto(String cpnCode, String cpnGubun, String cpnNm, String cpnStat, String createDate, String endDate,
                     String cpnPrice, String cpnRatio, String minOdAmt, String maxAmt, String dtlDesc,
                     String useReq, String chgrId, Timestamp chgrDate) {
        this.cpnCode = cpnCode;
        this.cpnGubun = cpnGubun;
        this.cpnNm = cpnNm;
        this.cpnStat = cpnStat;
        this.createDate = createDate;
        this.endDate = endDate;
        this.cpnPrice = cpnPrice;
        this.cpnRatio = cpnRatio;
        this.minOdAmt = minOdAmt;
        this.maxAmt = maxAmt;
        this.dtlDesc = dtlDesc;
        this.useReq = useReq;
        this.chgrId = chgrId;
        this.chgrDate = chgrDate;
    }
}
