package brokurly.project.backoffice.service.etc;

import brokurly.project.backoffice.entity.etc.NoticeEntity;
import org.springframework.data.jpa.domain.Specification;

public interface NoticeService {
    Specification<NoticeEntity> getByNoticeTitle(String noticeTitle); // 조회조건 공지사항 제목
}
