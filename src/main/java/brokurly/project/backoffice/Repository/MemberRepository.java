package brokurly.project.backoffice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import brokurly.project.backoffice.Entity.Member.MemberEntity;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {

}
