import { baseInstance } from "../../instance";
import { ApiResult } from "../../models";
import { OrderResponse } from "./models";

const API_ADDRESS = "Order/";

export const getUserOrders = () => {
  return baseInstance.get<null, ApiResult<OrderResponse>>(`${API_ADDRESS}`);
};

export const createOrder = () => {};
