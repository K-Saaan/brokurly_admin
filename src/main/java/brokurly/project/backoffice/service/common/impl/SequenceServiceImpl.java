package brokurly.project.backoffice.service.common.impl;

import brokurly.project.backoffice.entity.common.SequenceEntity;
import brokurly.project.backoffice.entity.product.CouponEntity;
import brokurly.project.backoffice.repository.common.SequenceRepository;
import brokurly.project.backoffice.service.common.SequenceService;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class SequenceServiceImpl implements SequenceService {
    private  final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    SequenceRepository sequenceRepository;

    @Override
    @Transactional
    public String createNewSequence(String tblCode, int size){
        // tblCode로 해당하는 sequence 정보를 조회한다
        SequenceEntity sequence = sequenceRepository.findByTblCode(tblCode);
        String tblCodeVal = sequence.getTblCodeVal();

        // 최근 번호에서 1을 더해준다
        int currNo = sequence.getCurrNo() + 1;
        String newSeq = "";

        // 번호 앞에 구분 값이 있는 경우
        if(!tblCodeVal.equals("") && tblCodeVal != null){
            newSeq = tblCodeVal + StringUtils.leftPad(String.valueOf(currNo), size - tblCodeVal.length(), "0");
        }else{ // 구분 값이 없는 경우
            newSeq = String.valueOf(currNo);
        }
        // 최근 시퀀스 번호로 업데이트 해준다
        sequence.updateSeqDto(tblCode, currNo, sequence.getCurrYyyy(), sequence.getCurrMm(), sequence.getCurrDd());

        return newSeq;
    }
}
