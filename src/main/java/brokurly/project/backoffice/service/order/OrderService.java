package brokurly.project.backoffice.service.order;

import brokurly.project.backoffice.dto.order.OrderDto;

import javax.servlet.http.HttpServletRequest;

public interface OrderService {
    public int addOrder(OrderDto orderDto, HttpServletRequest request); // 쿠폰 수정 처리
}
