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
    private BigDecimal cpnRatio;
    @Builder
    public ProductCpnPriceDto(String pdCode, String pdNm, String pdPrice, String cpnCode, BigDecimal cpnRatio) {
        this.pdCode = pdCode;
        this.pdNm = pdNm;
        this.pdPrice = pdPrice;
        this.cpnCode = cpnCode;
        this.cpnRatio = cpnRatio;
    }
}
