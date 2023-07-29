package brokurly.project.backoffice.dto.order;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 아무런 값도 갖지 않는 의미 없는 객체의 생성을 막아줌
public class OrderDto {
    private String custCode;
    private String odDate;
    private String odState;
    private String payState;
    private String deliLocCode;
    private String reveNm;
    private String reveTelNo;
    private String revePlace;
    private String revePlaceDtl;
    private String deliComMsg;
    private Double totPayAmt;
    private Double totOdAmt;
    private Double cpnDiscAmt;
    private Double pdDiscAmt;
    private Double usedReservedAmt;
    private Double totDiscAmt;
    private Double deliPrice;
    private Double tobeReserve;
    private List<String> pdCode;
    private List<String> pdCount;
    private List<String> pdOptCode;
    private List<Double> pdDiscAmtDtl;
    private List<Double> cpnDiscAmtDtl;
    private List<String> cpnCode;
    private String cpnUseDate;

    @Builder
    public OrderDto(String custCode, String odDate, String odState, String payState,
                    String deliLocCode, String reveNm, String reveTelNo, String revePlace,
                    String revePlaceDtl, String deliComMsg, Double totPayAmt, Double totOdAmt,
                    Double cpnDiscAmt, Double pdDiscAmt, Double usedReservedAmt, Double totDiscAmt, Double deliPrice,
                    Double tobeReserve, List<String> pdCode, List<String> pdCount, List<String> pdOptCode,
                    List<Double> pdDiscAmtDtl, List<Double> cpnDiscAmtDtl, List<String> cpnCode,
                    String cpnUseDate) {
        this.custCode = custCode;
        this.odDate = odDate;
        this.odState = odState;
        this.payState = payState;
        this.deliLocCode = deliLocCode;
        this.reveNm = reveNm;
        this.reveTelNo = reveTelNo;
        this.revePlace = revePlace;
        this.revePlaceDtl = revePlaceDtl;
        this.deliComMsg = deliComMsg;
        this.totPayAmt = totPayAmt;
        this.totOdAmt = totOdAmt;
        this.cpnDiscAmt = cpnDiscAmt;
        this.pdDiscAmt = pdDiscAmt;
        this.usedReservedAmt = usedReservedAmt;
        this.totDiscAmt = totDiscAmt;
        this.deliPrice = deliPrice;
        this.tobeReserve = tobeReserve;
        this.pdCode = pdCode;
        this.pdCount = pdCount;
        this.pdOptCode = pdOptCode;
        this.pdDiscAmtDtl = pdDiscAmtDtl;
        this.cpnDiscAmtDtl = cpnDiscAmtDtl;
        this.cpnCode = cpnCode;
        this.cpnUseDate = cpnUseDate;
    }
}
