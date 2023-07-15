package brokurly.project.backoffice.dto.product;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Getter
@NoArgsConstructor
public class ProductCpnPriceDto {
    private String pdCode;
    private String pdNm;
    private String pdPrice;
    private String cpnCode;
    private String cpnNm;
    private String useYn;
    private BigDecimal minOdAmt;
    private BigDecimal maxAmt;
    private BigDecimal cpnPrice;
    private BigDecimal cpnRatio;
    private String custCode;
    @Builder
    public ProductCpnPriceDto(String pdCode, String pdNm, String pdPrice, String cpnCode, String cpnNm, String useYn,
                              BigDecimal minOdAmt, BigDecimal maxAmt, BigDecimal cpnPrice, BigDecimal cpnRatio,
                              String custCode) {
        this.pdCode = pdCode;
        this.pdNm = pdNm;
        this.pdPrice = pdPrice;
        this.cpnCode = cpnCode;
        this.cpnNm = cpnNm;
        this.useYn = useYn;
        this.minOdAmt = minOdAmt;
        this.maxAmt = maxAmt;
        this.cpnPrice = cpnPrice;
        this.cpnRatio = cpnRatio;
        this.custCode = custCode;
    }
}
