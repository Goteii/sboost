import React, { Component } from "react";

import "./AboutViewStyles.scss";

export default class AboutView extends Component {
  componentDidMount() {
    document
      .querySelector(".about-container")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    const aboutObj = [
      {
        id: 1,
        header: "How long do we work for?",
        body:
          "Its been already 3 years since we started our boosting service for the first time but the most satisfying fact about it is that we are still in touch with our first customers!",
      },
      {
        id: 2,
        header: "How do we work?",
        body:
          "During the service we use VPN with chosen country and city(if possible) by our customer, making sure that both of sides of service are safe! We are online on fb/smiteboost, twitter/smite-boost or gmail(smiteboostrank@gmail.com) for a lot of time at different periods of time so you can expect the answer anytime in case of contacting us!",
      },
      {
        id: 3,
        header: "How does the service look like?",
        body: ` The service looks differently depends of choosen type of it and chosen mode. In case of duel: \n
        Booster is in touch with customer constantly, setting up hours in the way the both sides will agree with(Booster might be working,  might be busy because of another service etc. // Customer might want to play at some specific time). At the time of boosting customer feels free to spectate games. Customer will be constantly notified about progress.
        \n
         In case of joust or conquest: Customer has full-pack options to choose. Boosting with owner, boosting with other boosters, boosting solo.
      \n
        Boosting with owner - The booster asks about mmr of client's account, then finds account within the range of mmr and then they talk about hours they could play together at.
        \n
        Boosting with another booster/s - The booster asks about hours when customer's account will be ready to use and notifies about  the progress. Time of service is usually really short since there is at least 1 another booster.
        \n
        Boosting solo - The booster asks about hours when customer's account will be ready to use and notifies about the progress.`,
      },
      {
        id: 4,
        header: "What is the most important for us?",
        body:
          "The things we value the most is contact with our clients and their trust. Every satisfied client makes us satisfied!",
      },
      {
        id: 5,
        header: "Our staff:",
        body: ` Our staff includes 3 people which are pretty good at their own, favourite gamemode. So basically we have a dueler who have achieved Masters in season2, then GM in season3-5 and was  participating in lots of tournaments.
      \n
        Jouster who who didnt fell down from GM since season3 and was participating with his team in Official HiRez joust tournament.
        \n
        And our relatively new member - Masters at Conquest in season6 and season7.`,
      },
    ];

    const aboutMapped = aboutObj.map((about) => (
      <div>
        <li key={about.id} className="description-headers">
          {about.header}
        </li>
        <span className="description-text">{about.body}</span>
      </div>
    ));
    
    return (
      <div className="about-container">
        <div className="about-maintext">
          <span className="maintext">About us!</span>
        </div>
        <div className="about-description">
          <ul className="description-list">
            {aboutMapped}
          </ul>
        </div>
      </div>
    );
  }
}
