package brokurly.project.backoffice.dto.co;

import brokurly.project.backoffice.entity.common.SequenceEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED) // 아무런 값도 갖지 않는 의미 없는 객체의 생성을 막아줌
public class updateSeqDto {
    public String tblCode;
    public int currNo;
    public int currYyyy;
    public int currMm;
    public int currDd;

    @Builder
    public updateSeqDto(String tblCode, int currNo, int currYyyy, int currMm, int currDd){
        this.tblCode = tblCode;
        this.currNo = currNo;
        this.currYyyy = currYyyy;
        this.currMm = currMm;
        this.currDd = currDd;
    }

    public SequenceEntity toEntity(){
        return SequenceEntity.builder()
                .tblCode(tblCode)
                .currNo(currNo)
                .currYyyy(currYyyy)
                .currMm(currMm)
                .currDd(currDd)
                .build();
    }
}
