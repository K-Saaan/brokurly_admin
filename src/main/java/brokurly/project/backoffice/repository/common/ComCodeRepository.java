package brokurly.project.backoffice.repository.common;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import brokurly.project.backoffice.entity.common.ComCodeEntity;

public interface ComCodeRepository extends JpaRepository<ComCodeEntity, String> {
	List<ComCodeEntity> findByCategory(String category); // 카테고리로 조회
}
