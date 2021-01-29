import React, { Component } from "react";

import CoachingModeDiamond from "./coaching-modes/CoachingModeDiamond";
import CoachingModeGrandmaster from "./coaching-modes/CoachingModeGrandmaster";
import CoachingModeMasters from "./coaching-modes/CoachingModeMasters";
import CoachingView from "./coaching-view/CoachingView";

import { CoachingFormState } from "./CoachingModel";

class CoachingForm extends Component {
  readonly state: CoachingFormState = {
    step: 1,
    selectLevelOfCoaching: "",
    price: 0,
    selectMode: "",
  };

  componentDidMount() {
    document
      .querySelector(".coaching-container")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  getRank = (rank: string, priceAmount: number) => {
    this.setState({
      selectLevelOfCoaching: rank,
      price: priceAmount,
    });
  };

  chooseDivision = (mode: string) => {
    this.setState({
      selectMode: mode,
    });
  };

  render() {
    const { step, selectLevelOfCoaching } = this.state;
    const { price, selectMode } = this.state;
    const valuesFormCoaching = { price, selectMode, selectLevelOfCoaching };

    switch (step) {
      case 1:
        return (
          <CoachingView
            nextStep={this.nextStep}
            valuesFormCoaching={valuesFormCoaching}
            getRank={this.getRank}
          />
        );
      case 2:
        if (selectLevelOfCoaching === "diamond") {
          return (
            <CoachingModeDiamond
              chooseDivision={this.chooseDivision}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              valuesFormCoaching={valuesFormCoaching}
            />
          );
        }
        if (selectLevelOfCoaching === "master") {
          return (
            <CoachingModeMasters
              chooseDivision={this.chooseDivision}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              valuesFormCoaching={valuesFormCoaching}
            />
          );
        } else
          return (
            <CoachingModeGrandmaster
              chooseDivision={this.chooseDivision}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              valuesFormCoaching={valuesFormCoaching}
            />
          );
    }
  }
}

export default CoachingForm;