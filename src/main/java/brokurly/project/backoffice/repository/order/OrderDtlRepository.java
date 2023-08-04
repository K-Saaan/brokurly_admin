package brokurly.project.backoffice.repository.order;

import brokurly.project.backoffice.entity.order.OrderDtlEntity;
import brokurly.project.backoffice.entity.product.OrderPdList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDtlRepository extends JpaRepository<OrderDtlEntity, OrderPdList> {
    List<OrderDtlEntity> findByOdCode(String odCode);
}
