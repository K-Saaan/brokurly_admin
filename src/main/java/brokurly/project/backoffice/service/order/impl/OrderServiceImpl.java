package brokurly.project.backoffice.service.order.impl;

import brokurly.project.backoffice.common.Consts;
import brokurly.project.backoffice.dto.order.OrderDto;
import brokurly.project.backoffice.service.common.SequenceService;
import brokurly.project.backoffice.service.order.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import java.sql.Timestamp;

@Service
public class OrderServiceImpl implements OrderService {
    private  final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private SequenceService sequenceService;

    @Transactional
    public int addOrder(OrderDto orderDto, HttpServletRequest request) {
//        try {
            HttpSession session = request.getSession();
            String regId = (String) session.getAttribute("mngId");
            Timestamp now = new Timestamp(System.currentTimeMillis());

            String orderCode = sequenceService.createNewSequence(Consts.TBL_CODE.OD_INFO, 10);
            // od.OD_INFO에 들어갈 사항들
            logger.info(orderCode);
            logger.info(orderDto.getCustCode());
            logger.info(orderDto.getOdDate());
            logger.info(orderDto.getOdState());
            logger.info(orderDto.getPayState());
            logger.info(orderDto.getDeliLocCode());
            logger.info(orderDto.getReveNm());
            logger.info(orderDto.getReveTelNo());
            logger.info(orderDto.getRevePlace());
            logger.info(orderDto.getRevePlaceDtl());
            logger.info(orderDto.getDeliComMsg());
            logger.info(orderDto.getTotPayAmt());
            logger.info(orderDto.getTotOdAmt());
            logger.info(orderDto.getCpnDiscAmt());
            logger.info(orderDto.getPdDiscAmt());
            logger.info(orderDto.getTotDiscAmt());
            logger.info(orderDto.getDeliPrice());
            logger.info(orderDto.getTobeReserve());
            logger.info(regId);
            logger.info(now.toString());

            // od.OD_INFO에 들어갈 사항들
            logger.info(orderDto.getPdCode().toString());
            logger.info(orderDto.getPdCount().toString());

            throw new RuntimeException();
//        } catch (Exception e) {
//            e.printStackTrace();
//            return 0;
//        }
    }
}
