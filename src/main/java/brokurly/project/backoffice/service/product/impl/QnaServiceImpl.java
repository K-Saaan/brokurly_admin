package brokurly.project.backoffice.service.product.impl;

import brokurly.project.backoffice.dto.member.MemberDto;
import brokurly.project.backoffice.dto.product.QnaDto;
import brokurly.project.backoffice.entity.member.MemberEntity;
import brokurly.project.backoffice.entity.product.QnaEntity;
import brokurly.project.backoffice.repository.product.QnaRepository;
import brokurly.project.backoffice.service.product.QnaService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class QnaServiceImpl implements QnaService {
    private  final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private QnaRepository qnaRepository;

    // 문의 조회 화면 조회조건
    // 상품 코드 조회조건
    @Override
    public Specification<QnaEntity> getByPdCode(String pdCode) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("pdCode"), "%" + pdCode + "%");
    }
    // 고객코드 조회조건
    @Override
    public Specification<QnaEntity> getByCustCode(String custCode) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("custCode"), "%" + custCode + "%");
    }

    @Transactional
    public int replyQna(String qnaCode, QnaDto qnaDto) {
        QnaEntity qnaEntity = qnaRepository.findById(qnaCode).orElseThrow(() -> new IllegalArgumentException("No data"));
        qnaEntity.replyQna(qnaDto.getQnaCode(), qnaDto.getQnaReply(), qnaDto.getQnaState());
        return 1;
    }
}
