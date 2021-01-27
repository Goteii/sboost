import React, { useState } from "react";

import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";

import Portal from "../../shared/utils/portal/Portal";
import { setSessionStorageToken } from "../../shared/helpers/storageHelpers";

import { setInstance } from "../../api/instance";

import { FormModel, ModalProps } from "./models";

import closeSign from "./images/close_sign.png";
import "./RegLogModalStyles.scss";
import { login, registerUser } from "../../api/services/user/userService";
import { UserAuthenticatedResponse, UserLoginPayload, UserRegisterPayload } from "../../api/services/user/models";


const INIT_STATE: FormModel = {
  loginUsername: "",
  loginPassword: "",
  regEmail: "",
  regName: "",
  regPassword: "",
  regPasswordRepeat: "",
  loginUsernameError: "",
  loginPasswordError: "",
};

// otypować to dobrze
const RegLogModal = (props: any) => {
  const { onClose }: ModalProps = props;
  const [isActive, setIsActive] = useState(false);
  const [formDetails, setFormDetails] = useState<FormModel>(INIT_STATE);
  const { register, handleSubmit, errors } = useForm();

  const changeActive = () => {
    setIsActive(!isActive);
  };

  const insertValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const validateLogin = () => {
    let isProper = true;

    if (!formDetails.loginUsername) {
      formDetails.loginUsernameError = "Wrong username";
      isProper = false;
    } 

    if (!formDetails.loginPassword) {
      formDetails.loginPasswordError = "Wrong password";
      isProper = false;
    }

    return isProper;
  };

  const handleSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateLogin();

    if (isValid) {
      const userPayload: UserLoginPayload = {
        password: formDetails.loginUsername,
        username: formDetails.loginPassword
      }

      let apiUser = {} as UserAuthenticatedResponse;

      try {
        const apiResult = await login(userPayload);
        
        let { success, result } = apiResult.data;
        if (success) {
          apiUser = result as UserAuthenticatedResponse;
          setSessionStorageToken(apiUser.tokenString);
        }
      }
      catch (e) {
        console.log(e);
      }
      finally {
        setInstance();

        if (apiUser.role === 'Admin') {
          props.history.push('/admindashboard');
        } else {
          props.history.push('dashboard', {
            userId: apiUser.id,
            username: apiUser.username,
            email: apiUser.email
          });
        }

      }
      setFormDetails(INIT_STATE);
    }
  };

  const handleSubmitRegister = async () => {
    try {
      // walidacja

      const user: UserRegisterPayload = {
        email: formDetails.regEmail,
        password: formDetails.regPassword,
        repeatPassword: formDetails.regPasswordRepeat,
        username: formDetails.regName
      }

      await registerUser(user);
    }
    catch (e) {
      console.log(e);
    }

    // jesli success z backendu to tak, jesli bledy z walidacji to nie
    // oifować
    
    setFormDetails(INIT_STATE);
  };

  const repeatPasswordCheck = () => {
    if (formDetails.regPassword !== formDetails.regPasswordRepeat) {
      return false && <span className="error">Passwords have to match</span>;
    }
    return true;
  };

  // rozbić na dwa komponenty
  return (
    <Portal id="modal-root">
      <div className="first-container">
        <div
          className={isActive ? "container right-panel-active" : "container"}
          id="container"
        >
          <div className="form-container sign-up-container">
            <div className="close-button-container">
              <div className="close-button">
                <img
                  id="signUpCloseSign"
                  src={closeSign}
                  alt="closeSign"
                  onClick={onClose}
                />
              </div>
            </div>
            <form onSubmit={handleSubmit(handleSubmitRegister)}>
              <h1>Create Account</h1>
              <div className="social-container"></div>
              <input
                name="regName"
                type="text"
                placeholder="Name"
                value={formDetails.regName}
                onChange={insertValue}
                ref={register({
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                })}
              />
              {errors.regName && errors.regName.type === "required" && (
                <span className="error">Name field is required</span>
              )}
              {errors.regName && errors.regName.type === "minLength" && (
                <span className="error">Name field has to be minimum 3</span>
              )}
              {errors.regName && errors.regName.type === "maxLength" && (
                <span className="error">Name field has to be maximum 20</span>
              )}
              <input
                name="regEmail"
                type="email"
                placeholder="Email"
                value={formDetails.regEmail}
                onChange={insertValue}
                ref={register({ required: true })}
              />
              {errors.regEmail && errors.regEmail.type === "required" && (
                <span className="error">Email is required</span>
              )}
              <input
                name="regPassword"
                type="password"
                placeholder="Password"
                value={formDetails.regPassword}
                onChange={insertValue}
                ref={register({ required: true, minLength: 6 })}
              />
              {errors.regPassword && errors.regPassword.type === "required" && (
                <span className="error">Password is required</span>
              )}
              {errors.regPassword &&
                errors.regPassword.type === "minLength" && (
                  <span className="error">Password has to be minimum 6</span>
                )}

              <input
                name="regPasswordRepeat"
                type="password"
                placeholder="Repeat Password"
                value={formDetails.regPasswordRepeat}
                onChange={insertValue}
                ref={register({
                  required: true,
                  minLength: 6,
                  validate: repeatPasswordCheck,
                })}
              />
              {errors.regPasswordRepeat &&
                errors.regPasswordRepeat.type === "required" && (
                  <span className="error"> Repeat Password is required</span>
                )}
              {errors.regPasswordRepeat &&
                errors.regPasswordRepeat.type === "minLength" && (
                  <span className="error">Password has to be minimum 6</span>
                )}
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <div className="close-button-container">
              <div className="close-button">
                <img
                  id="SignInCloseSign"
                  src={closeSign}
                  alt="closeSign"
                  onClick={onClose}
                />
              </div>
            </div>
            <form onSubmit={handleSubmitLogin}>
              <h1>Sign in</h1>
              <div className="social-container"></div>
              <input
                name="loginUsername"
                type="text"
                placeholder="Username"
                value={formDetails.loginUsername}
                onChange={insertValue}
              />
              <div className="error">{formDetails.loginUsernameError}</div>
              <input
                name="loginPassword"
                type="password"
                placeholder="Password"
                value={formDetails.loginPassword}
                onChange={insertValue}
              />
              <div className="error">{formDetails.loginPasswordError}</div>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1> Welcome back, Friend!</h1>
                <p>To be in touch with us just log in</p>
                <button className="ghost" id="signIn" onClick={changeActive}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Make an account and start journey with us!</p>
                <button className="ghost" id="signUp" onClick={changeActive}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default withRouter(RegLogModal);
