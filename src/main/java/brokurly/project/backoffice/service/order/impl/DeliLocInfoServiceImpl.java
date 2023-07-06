package brokurly.project.backoffice.service.order.impl;

import brokurly.project.backoffice.entity.order.DeliLocInfoEntity;
import brokurly.project.backoffice.repository.order.DeliLocInfoRepository;
import brokurly.project.backoffice.service.order.DeliLocInfoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class DeliLocInfoServiceImpl implements DeliLocInfoService {
    private  final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private DeliLocInfoRepository deliLocInfoRepository;
    private DeliLocInfoEntity deliLocInfoEntity;

    @Override
    public Specification<DeliLocInfoEntity> getByCustCode(String custCode) {
        return ((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("custCode"), custCode));
    }
}
