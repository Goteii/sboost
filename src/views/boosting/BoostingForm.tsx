import React, { Component } from "react";

import BoostingModeSelection from "./modeSelection/BoostingModeSelection";
import SelectCurrentDivisionConquest from "./currentDivision/SelectCurrentDivisionConquest";
import SelectCurrentDivisionJoust from "./currentDivision/SelectCurrentDivisionJoust";
import SelectCurrentDivisionDuel from "./currentDivision/SelectCurrentDivisionDuel";
import SelectFutureDivision from "./futureDivision/SelectFutureDivision";
import SelectFutureDivisionJoust from "./futureDivision/SelectFutureDivisionJoust";
import SelectFutureDivisionDuel from "./futureDivision/SelectFutureDivisionDuel";
import TypeOfService from "./typeOfService/TypeOfService";
import TypeOfServiceDuel from "./typeOfService/TypeOfServiceDuel";
import Extras from "./extras/Extras";
import ConfirmModal from "./confirmModal/ConfirmModal";
import { baseInstance } from "../../api/instance";

class BoostingForm extends Component {
  state = {
    step: 1,
    selectMode: 0,
    currentDivision: 0,
    currentTier: 0,
    futureDivision: 0,
    futureTier: 0,
    typeOfService: 0,
    extras: 0,
    error: "",
    moneyCounter: [],
  };

  componentDidMount() {
    document
      .querySelector(".boosting-container")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  sendOrderToDb = () => {
    baseInstance
      .post("Order", {
        modeId: +this.state.selectMode,
        boostingTypeId: +this.state.typeOfService,
        currentDivisionId: +this.state.currentDivision,
        currentTierId: +this.state.currentTier,
        futureDivisionId: +this.state.futureDivision,
        futureTierId: +this.state.futureTier,
      })
      .then((res) => console.log(res))
      .catch((e) => {
        console.log(e);
      });
  };

  validateStep = () => {
    const { step } = this.state;
    let { error } = this.state;
    let isProper: boolean = true;
    let errormessage: string;

    if (step === 1 && !this.state.selectMode) {
      errormessage = "You didnt choose mode";
      error = errormessage;
      isProper = false;
    } else if (step === 2 && !this.state.currentDivision) {
      errormessage = "You didnt choose your current division";
      error = errormessage;
      isProper = false;
    } else if (step === 2 && !this.state.currentTier) {
      errormessage = "You didnt choose your current tier of division";
      error = errormessage;
      isProper = false;
    } else if (step === 3 && !this.state.futureDivision) {
      errormessage = "You didnt choose the division you want";
      error = errormessage;
      isProper = false;
    } else if (step === 3 && !this.state.futureTier) {
      errormessage = "You didnt choose the tier of division you want";
      error = errormessage;
      isProper = false;
    } else if (step === 4 && !this.state.typeOfService) {
      errormessage = "You didnt choose type of service you want";
      error = errormessage;
      isProper = false;
    }
    return isProper ? true : error;
  };

  nextStep = () => {
    const { step } = this.state;
    const isChecked = this.validateStep();
    console.log(this.validateStep());
    if (isChecked === true) {
      this.setState({
        step: step + 1,
      });
    }
    return isChecked;
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (e: any) => {
    const {
      target: { value, name },
    } = e;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      step,
      selectMode,
      currentDivision,
      currentTier,
      futureDivision,
      futureTier,
      typeOfService,
      extras,
      error,
      moneyCounter,
    } = this.state;
    const valuesFormBoosting = {
      selectMode,
      currentDivision,
      currentTier,
      futureDivision,
      futureTier,
      typeOfService,
      extras,
      error,
      moneyCounter,
    };
    console.log(valuesFormBoosting);
    const costCurrentDivisionObj = {
      division: currentDivision,
      tier: currentTier,
    };
    const costFutureDivisionObj = {
      division: futureDivision,
      tier: futureTier,
    };
    const modeCostObj = {
      mode: selectMode,
    };
    const serviceObj = {
      service: typeOfService,
    };
    switch (step) {
      case 1:
        return (
          <BoostingModeSelection
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            valuesFormBoosting={valuesFormBoosting}
            validateStep={this.validateStep}
          />
        );
      case 2:
        if (+valuesFormBoosting.selectMode === 2) {
          return (
            <SelectCurrentDivisionConquest
              nextStep={this.nextStep}
              previousStep={this.prevStep}
              handleChange={this.handleChange}
              valuesFormBoosting={valuesFormBoosting}
              validateStep={this.validateStep}
            />
          );
        } else if (+valuesFormBoosting.selectMode === 1) {
          return (
            <SelectCurrentDivisionJoust
              nextStep={this.nextStep}
              previousStep={this.prevStep}
              handleChange={this.handleChange}
              valuesFormBoosting={valuesFormBoosting}
              validateStep={this.validateStep}
            />
          );
        } else {
          return (
            <SelectCurrentDivisionDuel
              nextStep={this.nextStep}
              previousStep={this.prevStep}
              handleChange={this.handleChange}
              valuesFormBoosting={valuesFormBoosting}
              validateStep={this.validateStep}
            />
          );
        }
      case 3:
        if (+valuesFormBoosting.selectMode === 2) {
          return (
            <SelectFutureDivision
              nextStep={this.nextStep}
              previousStep={this.prevStep}
              handleChange={this.handleChange}
              valuesFormBoosting={valuesFormBoosting}
              validateStep={this.validateStep}
            />
          );
        } else if (+valuesFormBoosting.selectMode === 1) {
          return (
            <SelectFutureDivisionJoust
              nextStep={this.nextStep}
              previousStep={this.prevStep}
              handleChange={this.handleChange}
              valuesFormBoosting={valuesFormBoosting}
              validateStep={this.validateStep}
            />
          );
        } else {
          return (
            <SelectFutureDivisionDuel
              nextStep={this.nextStep}
              previousStep={this.prevStep}
              handleChange={this.handleChange}
              valuesFormBoosting={valuesFormBoosting}
              validateStep={this.validateStep}
            />
          );
        }
      case 4:
        if (+valuesFormBoosting.selectMode === 3) {
          return (
            <TypeOfServiceDuel
              nextStep={this.nextStep}
              previousStep={this.prevStep}
              handleChange={this.handleChange}
              valuesFormBoosting={valuesFormBoosting}
              validateStep={this.validateStep}
            />
          );
        } else {
          return (
            <TypeOfService
              nextStep={this.nextStep}
              previousStep={this.prevStep}
              handleChange={this.handleChange}
              valuesFormBoosting={valuesFormBoosting}
              validateStep={this.validateStep}
            />
          );
        }
      case 5:
        return (
          <Extras
            nextStep={this.nextStep}
            previousStep={this.prevStep}
            handleChange={this.handleChange}
            valuesFormBoosting={valuesFormBoosting}
            validateStep={this.validateStep}
          />
        );
      case 6:
        return (
          <ConfirmModal
            nextStep={this.nextStep}
            previousStep={this.prevStep}
            handleChange={this.handleChange}
            valuesFormBoosting={valuesFormBoosting}
            costCurrent={costCurrentDivisionObj}
            costFuture={costFutureDivisionObj}
            modeCost={modeCostObj}
            service={serviceObj}
            sendOrderToDb={this.sendOrderToDb}
            validateStep={this.validateStep}
          />
        );
    }
  }
}

export default BoostingForm;
