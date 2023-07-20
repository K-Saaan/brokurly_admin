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
    private String totPayAmt;
    private String totOdAmt;
    private String cpnDiscAmt;
    private String pdDiscAmt;
    private String totDiscAmt;
    private String deliPrice;
    private String tobeReserve;
    private List<String> pdCode;
    private List<String> pdCount;
    private List<String> pdOptCode;
    private List<String> pdDiscAmtDtl;
    private List<String> cpnDiscAmtDtl;
    private List<String> cpnCode;

    @Builder
    public OrderDto(String custCode, String odDate, String odState, String payState,
                    String deliLocCode, String reveNm, String reveTelNo, String revePlace,
                    String revePlaceDtl, String deliComMsg, String totPayAmt, String totOdAmt,
                    String cpnDiscAmt, String pdDiscAmt, String totDiscAmt, String deliPrice,
                    String tobeReserve, List<String> pdCode, List<String> pdCount, List<String> pdOptCode,
                    List<String> pdDiscAmtDtl, List<String> cpnDiscAmtDtl, List<String> cpnCode) {
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
        this.totDiscAmt = totDiscAmt;
        this.deliPrice = deliPrice;
        this.tobeReserve = tobeReserve;
        this.pdCode = pdCode;
        this.pdCount = pdCount;
        this.pdOptCode = pdOptCode;
        this.pdDiscAmtDtl = pdDiscAmtDtl;
        this.cpnDiscAmtDtl = cpnDiscAmtDtl;
        this.cpnCode = cpnCode;
    }
}
