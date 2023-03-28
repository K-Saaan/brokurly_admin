package brokurly.project.backoffice.service.product;

import brokurly.project.backoffice.dto.member.MemberDto;
import brokurly.project.backoffice.dto.product.QnaDto;
import brokurly.project.backoffice.entity.product.QnaEntity;
import org.springframework.data.jpa.domain.Specification;

public interface QnaService {
    // 문의 조회 화면
    Specification<QnaEntity> getByPdCode(String pdCode); // 조회조건 상품코드
    Specification<QnaEntity> getByCustCode(String custCode); // 조회조건 고객코드
    public int replyQna(String qnaCode, QnaDto qnaDto); // 문의 답변 처리
}
