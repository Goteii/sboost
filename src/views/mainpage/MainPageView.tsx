import React from "react";
import { withRouter, Route } from "react-router-dom";

import FirstView from "../first-view/FirstView";
import BoostingForm from "../boosting/BoostingForm";
import EncourageView from "../encourage/EncourageView";
import FooterView from "../footer/FooterView";
import Navbar from "../navbar/Navbar";
import AboutView from "../about/AboutView";
import CoachingForm from "../coaching/CoachingForm";
import OpinionsView from "../user-opinions/OpinionsWrapper";

import "./MainPageViewStyles.scss";

class MainPageView extends React.Component<any> {
  render() {
    return (
      <div className="mainpage-container">
        <Navbar />
        <FirstView />
        <Route path="/boosting">
          <BoostingForm />
        </Route>
        <Route path="/about">
          <AboutView />
        </Route>
        <Route path="/coaching">
          <CoachingForm />
        </Route>
        <Route path="/opinions">
          <OpinionsView />
        </Route>
        {this.props.location.pathname === "/boosting" ||
          this.props.location.pathname === "/about" ||
          this.props.location.pathname === "/coaching" ||
          this.props.location.pathname === "/opinions" || <EncourageView />}
        <FooterView />
      </div>
    );
  }
}

export default withRouter(MainPageView);
