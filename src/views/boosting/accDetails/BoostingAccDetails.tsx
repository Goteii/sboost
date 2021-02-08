import React from 'react'

import { AccountDetailsProps} from '../BoostingModel';

import "../BoostingViewStyles.scss";

const BoostingAccDetails = (props: AccountDetailsProps) => {
    const {
        nextStep,
        previousStep,
        insertLogin,
        insertPassword,
        valuesFormBoosting
    } = props;
    return (
             <div className="boosting-container">
        <span className="boosting-maintext">
          Write down your account details to allow booster play:
        </span>
        {valuesFormBoosting.error}
        <div className="current-division">
            <div className="login-details">
                <label className="label-boosting">Login</label>
            <input
                name="loginDetails"
                type="text"
                placeholder="Login"
                className="boosting-details"
                value={valuesFormBoosting.loginDetails}
                onChange={insertLogin}
                />
            </div>
            <div className="password-details">
                <label className="label-boosting">Password</label>
            <input
                name="passwordDetails"
                type="text"
                placeholder="Password"
                className="boosting-details"
                value={valuesFormBoosting.passwordDetails}
                onChange={insertPassword}
                />
            </div>
        </div>
        <div className="navigation-buttons">
          <div className="prev-button" onClick={previousStep}>
            BACK
          </div>
          <div className="next-button" onClick={nextStep}>
            NEXT
          </div>
        </div>
      </div>
    )
}

export default BoostingAccDetails;