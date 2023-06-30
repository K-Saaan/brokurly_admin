package brokurly.project.backoffice.dto.product;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ProductCateDto {
    private String pdCode;
    private String pdNm;

    @Builder
    public ProductCateDto(String pdCode, String pdNm) {
        this.pdCode = pdCode;
        this.pdNm = pdNm;
    }
}
