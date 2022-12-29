package brokurly.project.backoffice.service.common.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import brokurly.project.backoffice.entity.member.MemberEntity;
import brokurly.project.backoffice.repository.member.MemberRepository;
import brokurly.project.backoffice.service.common.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	private  final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private MemberRepository memberRepository;
	private MemberEntity memberEntity;
	
	// 전체 멤버 조회
	@Override
	public Map<String, Object> findAllMember(){
		List<MemberEntity> gridDataList = memberRepository.findAll();
		Map<String, Object> result = new HashMap();
		result.put("codeList", gridDataList);
		return result;
	}
	// 멤버 이름으로 멤버 조회
	@Override
	public Map<String, Object> findMemberByName(String custnm){
		List<MemberEntity> gridDataList = memberRepository.findByCustnm(custnm);
		Map<String, Object> result = new HashMap();
		result.put("codeList", gridDataList);
		return result;
	}
	// 카운트 조회
	@Override
	public int countByCustnm(String custnm){
		int countData = memberRepository.countByCustnm(custnm);
		return countData;
	}

}
