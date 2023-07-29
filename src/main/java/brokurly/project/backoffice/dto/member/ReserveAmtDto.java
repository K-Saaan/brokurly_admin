package brokurly.project.backoffice.dto.member;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReserveAmtDto {
    private Double reserveAmt;
    @Builder
    public ReserveAmtDto(Double reserveAmt) {
        this.reserveAmt = reserveAmt;
    }
}
