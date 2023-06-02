package brokurly.project.backoffice.service.etc.impl;

import brokurly.project.backoffice.entity.etc.NoticeEntity;
import brokurly.project.backoffice.repository.etc.NoticeRepository;
import brokurly.project.backoffice.service.etc.NoticeService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class NoticeServiceImpl implements NoticeService {
    private  final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private NoticeRepository noticeRepository;

    // 공지사항 조회 화면 조회조건
    // 공지사항 제목 조회조건
    @Override
    public Specification<NoticeEntity> getByNoticeTitle(String noticeTitle) {
        return ((root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("noticeTitle"), "%" + noticeTitle + "%"));
    }
}
