package brokurly.project.backoffice.dto.order;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class ChrgPayInfoDto {
    private int chrgSeqNo;
    private String pymAcntCode;
    private String custCode;
    private String odCode;
    private String pymTyp;
    private String payWay;
    private String payStat;
    private String cnclYn;
    private LocalDateTime chrgDate;
    private String bankCd;
    private String bankNm;
    private String cardNo;
    private String cardDueYy;
    private String cardDueMm;
    private String acntNo;
    private String acntHolder;
    private Double chrgAmt;
    private Double rcptAmt;
    private Double vat;
    private Double fee;
    private String regId;
    private LocalDateTime regDate;
    private String chgrId;
    private LocalDateTime chgrDate;

    @Builder
    public ChrgPayInfoDto(int chrgSeqNo, String pymAcntCode, String custCode, String odCode, String pymTyp,
                          String payWay, String payStat, String cnclYn, LocalDateTime chrgDate,
                          String bankCd, String bankNm, String cardNo, String cardDueYy, String cardDueMm,
                          String acntNo, String acntHolder, Double chrgAmt, Double rcptAmt, Double vat, Double fee,
                          String regId, LocalDateTime regDate, String chgrId, LocalDateTime chgrDate) {
        this.chrgSeqNo = chrgSeqNo;
        this.pymAcntCode = pymAcntCode;
        this.custCode = custCode;
        this.odCode = odCode;
        this.pymTyp = pymTyp;
        this.payWay = payWay;
        this.payStat = payStat;
        this.cnclYn = cnclYn;
        this.chrgDate = chrgDate;
        this.bankCd = bankCd;
        this.bankNm = bankNm;
        this.cardNo = cardNo;
        this.cardDueYy = cardDueYy;
        this.cardDueMm = cardDueMm;
        this.acntNo = acntNo;
        this.acntHolder = acntHolder;
        this.chrgAmt = chrgAmt;
        this.rcptAmt = rcptAmt;
        this.vat = vat;
        this.fee = fee;
        this.regId = regId;
        this.regDate = regDate;
        this.chgrId = chgrId;
        this.chgrDate = chgrDate;
    }
}
