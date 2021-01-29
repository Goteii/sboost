import React, { useState, useEffect } from "react";

import { getUserOrders } from "../../../api/services/orders/orderService";
import { OrderPayload, OrderResponse } from "../../../api/services/orders/models";

import "./OrdersStyles.scss";
import UpdateOrderModal from "../update-order/UpdateOrderModal";
import { baseInstance } from "../../../api/instance";

const Orders = () => {
  const [apiOrders, setApiOrders] = useState<OrderResponse[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [order, setOrder] = useState<OrderPayload>({} as OrderPayload);

  useEffect(() => {
    const callApi = async () => {
      try {
        const apiResult = await getUserOrders();
        const { result } = apiResult.data;

        setApiOrders(result as OrderResponse[]);
      }
      catch(e) {
        console.log(e);
      } 
    }
    
    callApi();
  }, [])


 const sendUpdatedOrder = () => {
  baseInstance.patch("Order", {
    id: 3,
    state: 2
  }).then(res => console.log(res))
  .catch(e => console.log(e));
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSetSingleOrder = (order: OrderResponse) => {
    setOrder(order);
    toggleModal();
  }

  const mappingFunction = (data: OrderResponse[]) => {
    return data.map((order: OrderResponse, mainIndex: number) => {
      const extendedOrder = {
        ...order,
        actions: (
          <>
            <button className="order-button" onClick={() => handleSetSingleOrder(order)}>
              EDIT
            </button>
          </>
        ),
      };

      const values = Object.values(extendedOrder).map(
        (value: any, index: number) => {
          return (
            <div key={index} className="order-value">
              {value || "No data"}
            </div>
          );
        }
      );

      return (
        <div key={mainIndex} className="order-table">
          {values}
        </div>
      );
    });
  };

  return (
    <div className="admin-order-container">
      <div className="order-text">Users' orders:</div>
      {mappingFunction(apiOrders)}
      {showModal ? (
        <UpdateOrderModal
          order={order}
          toggleModal={toggleModal}
          handleChange={() => console.log('todo')}
          sendUpdatedOrder= {sendUpdatedOrder}
        />
      ) : null}
    </div>
  );
};

export default Orders;
