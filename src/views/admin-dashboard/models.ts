import { OrderResponse } from "../../api/services/orders/models";

export interface UpdateOrderModalProps {
  toggleModal(): void;
  handleChange(e: any): void;
  sendUpdatedOrder(): void;
  order: OrderResponse;
}


