package brokurly.project.backoffice.dto.product;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CateDto {
    private String cateCode;

    @Builder
    public CateDto(String cateCode) {
        this.cateCode = cateCode;
    }
}
