import React from "react";

import Portal from "../../../shared/utils/portal/Portal";
import { UpdateOrderModalProps } from "../models";

import "./UpdateOrderModalStyles.scss";

const UpdateOrderModal = ({
  order,
  toggleModal,
  handleChange,
  sendUpdatedOrder,
}: UpdateOrderModalProps) => {
  const passedProps = [
    {
      id: 1,
      name: "ID of order",
      props: order.id,
    },
    {
      id: 2,
      name: "User's ID",
      props: order.userId,
    },
    {
      id: 3,
      name: "Mode",
      props: order.mode,
    },
    {
      id: 4,
      name: "Type of Service",
      props: order.boostingType,
    },
    {
      id: 5,
      name: "Current Division",
      props: order.currentDivision,
    },
    {
      id: 6,
      name: "Current Tier",
      props: order.currentTier,
    },
    {
      id: 7,
      name: "Future Division",
      props: order.futureDivision,
    },
    {
      id: 8,
      name: "Future Tier",
      props: order.futureTier,
    },
  ];

  const UpdatedModal = passedProps.map((props) => (
    <div key={props.id} className="category">
      <span>{props.name}</span>
      <div className="value">{props.props}</div>
    </div>
  ));

  return (
    <Portal id="modal-root">
      <div className="modal-overlay">
        <div className="modal-container">
          <div className="modal">
            <div className="modal-order">
              {UpdatedModal}
              <div className="category">
                <span> Current state </span>
                <div className="value">
                  <select className="select" onChange={handleChange}>
                    <option value={order.orderState}>{order.orderState}</option>
                    <option value="ordered">ordered</option>
                    <option value="inprogress">in progress</option>
                    <option value="finished">finished</option>
                    <option value="canceled"> canceled</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="modal-buttons">
              <div className="close-sign">
                <button className="modal-close-order" onClick={toggleModal}>
                  X
                </button>
              </div>
              <div className="accept-sign">
                <button
                  className="modal-accept-order"
                  onClick={sendUpdatedOrder}
                >
                  V
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default UpdateOrderModal;
