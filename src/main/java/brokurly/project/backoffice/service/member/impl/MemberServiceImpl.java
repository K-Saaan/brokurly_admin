package brokurly.project.backoffice.service.member.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import brokurly.project.backoffice.entity.product.ProductEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import brokurly.project.backoffice.dto.member.MemberDto;
import brokurly.project.backoffice.entity.member.MemberEntity;
import brokurly.project.backoffice.repository.member.MemberRepository;
import brokurly.project.backoffice.service.member.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	private  final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private MemberRepository memberRepository;
	private MemberEntity memberEntity;

	@Transactional
	public int update(String custCode, MemberDto memberdto) {
		MemberEntity memberEntity = memberRepository.findById(custCode).orElseThrow(() -> new IllegalArgumentException("No data"));
		memberEntity.update(memberdto.getCustNm(), memberdto.getCustEmail());
		return 1;
	}

	@Override
	public Specification<MemberEntity> getByCustNm(String custNm) {
		return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("custNm"), "%" + custNm + "%");
	}

}
