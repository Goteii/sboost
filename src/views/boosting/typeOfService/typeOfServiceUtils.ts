import { boostingServiceDuo, boostingServiceDuoOff, boostingServiceSolo, boostingServiceSoloOff, 
  boostingServiceWithOwner, boostingServiceWithOwnerOff } from "../images/ExportedImages";

export const typeOfService = [
    {
      id: 1,
      name: "SoloBoosting",
      value: 1,
      imgOn: boostingServiceSolo,
      imgOff: boostingServiceSoloOff,
      description:
        "Booster will be playing solo on customer's account at hours when the account will be not used by owner.",
    },
    {
      id: 2,
      name: "DuoTripleBoost",
      value: 3,
      imgOn: boostingServiceDuo,
      imgOff: boostingServiceDuoOff,
      description:
         "Booster will play with another booster/s who is/are playing on another account/s at the same time. The quickest type of service and most efficient one.",
    },
    {
      id: 3,
      name: "WithOwner",
      value: 2,
      imgOn: boostingServiceWithOwner,
      imgOff: boostingServiceWithOwnerOff,
      description:
        "  Booster will be playing with owner at set hours. Much slower type of service. EXTRA 50%",
    },
  ];

 export const typeOfServiceDuel = [
    {
      id: 1,
      name: "SoloBoosting",
      value: 1,
      imgOn: boostingServiceSolo,
      imgOff: boostingServiceSoloOff,
      description:
        "Booster will be playing solo on customer's account at hours when the account will be not used by owner.",
    },
  ];