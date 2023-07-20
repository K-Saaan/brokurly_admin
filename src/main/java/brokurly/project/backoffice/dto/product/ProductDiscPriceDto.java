package brokurly.project.backoffice.dto.product;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class ProductDiscPriceDto {
    private String pdCode;
    private String pdNm;
    private String pdExt;
    private String pdPrice;
    private String deliType;
    private String deliExt;
    private String pdSeller;
    private String pakgType;
    private String pakgExt;
    private String salesUnit;
    private String pdWeg;
    private String orgLoc;
    private String pdSweet;
    private String alergInfo;
    private String expDate;
    private String extInfo;
    private String regId;
    private LocalDateTime regDate;
    private String chgrId;
    private LocalDateTime chgrDate;
    private String discCode;
    private String discRatio;

    @Builder
    public ProductDiscPriceDto(String pdCode, String pdNm, String pdExt, String pdPrice,
                               String deliType, String deliExt, String pdSeller, String pakgType,
                               String pakgExt, String salesUnit, String pdWeg, String orgLoc,
                               String pdSweet, String alergInfo, String expDate, String extInfo,
                               String regId, LocalDateTime regDate, String chgrId, LocalDateTime chgrDate,
                               String discCode, String discRatio) {
        this.pdCode = pdCode;
        this.pdNm = pdNm;
        this.pdExt = pdExt;
        this.pdPrice = pdPrice;
        this.deliType = deliType;
        this.deliExt = deliExt;
        this.pdSeller = pdSeller;
        this.pakgType = pakgType;
        this.pakgExt = pakgExt;
        this.salesUnit = salesUnit;
        this.pdWeg = pdWeg;
        this.orgLoc = orgLoc;
        this.pdSweet = pdSweet;
        this.alergInfo = alergInfo;
        this.expDate = expDate;
        this.extInfo = extInfo;
        this.regId = regId;
        this.regDate = regDate;
        this.chgrId = chgrId;
        this.chgrDate = chgrDate;
        this.discCode = discCode;
        this.discRatio = discRatio;
    }
}
