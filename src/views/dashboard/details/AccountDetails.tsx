import React, { useState } from "react";

import ChangePassword from "../changePassword/ChangePassword";

import { AccDetailsProps } from "../models";

import "./AccountDetailsStyles.scss";

const AccountDetails = (props: AccDetailsProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <div className="display-container">
      <div className="account-overview-holder">
       <span className="account-maintext"> Account Overview</span>
        <div className="personal-data-username">Username: {props.username}</div>
        <div className="personal-data-email">E-mail: {props.userEmail}</div>
        <div className="personal-data-id">Customer ID: {props.id}</div>
        <div className="change-password">
          <span className="pass-span" onClick={handleModal}>
            Change Password
          </span>
          {showModal ? <ChangePassword handleClose={handleModal} /> : null}
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
