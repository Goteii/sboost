import React, { useState } from "react";

import ChangePassword from "../changePassword/ChangePassword";

import { AccDetailsProps } from "../models";

import Scylla from "../image/scylla.png";

import "./AccountDetailsStyles.scss";

const AccountDetails = (props: AccDetailsProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  
  return (
    <div className="display-container">
      <div className="account-overview-holder">
        Account Overview
        <div className="personal-data-username">Username: {props.username}</div>
        <div className="personal-data-email">E-mail: {props.userEmail}</div>
        <div className="personal-data-id">Customer ID: {props.id}</div>
        <div className="change-password">
          <span className="pass-span" onClick={handleModal}>
            Change Password
          </span>
          {showModal ? <ChangePassword handleClose={handleModal} /> : null}
        </div>
        <span className="reminder">Do not forget about logging out!</span>
      </div>
      <div className="display-container-image">
        <img src={Scylla} alt="scylla" />
      </div>
    </div>
  );
};

export default AccountDetails;
