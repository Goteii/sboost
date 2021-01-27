import React, { useState } from "react";

import { UserChangePasswordPayload } from "../../../api/services/user/models";
import { changePassword } from "../../../api/services/user/userService";

import "./ChangePasswordStyles.scss";


const ChangePassword = (props: any) => {
  const { handleClose } = props;
  const [current, setCurrent] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeat, setRepeat] = useState("");

  const handleSubmit = async () => {
    try {
      const password: UserChangePasswordPayload = {
        currentPassword: current,
        newPassword: newPassword,
        repeatNewPassword: repeat
      }
      await changePassword(password);
    }  
    catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="password-container">
      <div className="password-modal-container">
        <form
          className="change-password-form"
          onSubmit={(ev: any): void => ev.preventDefault()}
        >
          <label className="label-for-input">Current password</label>
          <input
            className="password-modal-input current"
            onChange={(ev: any): void => setCurrent(ev.target.value)}
            type="password"
          ></input>
          <label className="label-for-input">New password</label>
          <input
            className="password-modal-input new"
            onChange={(ev: any): void => setNewPassword(ev.target.value)}
            type="password"
          ></input>
          <label className="label-for-input">Repeat new password</label>
          <input
            className="password-modal-input repeatNew"
            onChange={(ev: any): void => setRepeat(ev.target.value)}
            type="password"
          ></input>
          <div className="buttons-form">
            <button className="confirm" onClick={handleSubmit}>
              Change
            </button>
            <button className="cancel" onClick={handleClose}>
              BACK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
