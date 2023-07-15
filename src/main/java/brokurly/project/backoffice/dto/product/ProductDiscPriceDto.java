package brokurly.project.backoffice.dto.product;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ProductDiscPriceDto {
    private String pdCode;
    private String pdNm;
    private String pdPrice;
    private String discCode;
    private String discRatio;
    @Builder
    public ProductDiscPriceDto(String pdCode, String pdNm, String pdPrice, String discCode, String discRatio) {
        this.pdCode = pdCode;
        this.pdNm = pdNm;
        this.pdPrice = pdPrice;
        this.discCode = discCode;
        this.discRatio = discRatio;
    }
}
