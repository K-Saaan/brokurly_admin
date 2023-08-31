package brokurly.project.backoffice.service.order.impl;

import brokurly.project.backoffice.entity.billing.ChrgInfoEntity;
import brokurly.project.backoffice.repository.billing.ChrgInfoRepository;
import brokurly.project.backoffice.service.order.ChrgService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class ChrgServiceImpl implements ChrgService {
    private  final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private ChrgInfoRepository chrgInfoRepository;

    @Override
    public Specification<ChrgInfoEntity> getByOdCode(String odCode) {
        return (((root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("odCode"), "%" + odCode + "%")));
    }
}
