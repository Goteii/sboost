enum typeOfDivision {
Bronze = 1,
Silver,
Gold,
Platinum,
Diamond,
Masters
}

export const divisionsCost: any = {
  [typeOfDivision.Bronze]: {
    index: 1,
    cost: 7,
  },
  [typeOfDivision.Silver]: {
    index: 2,
    cost: 10,
  },
  [typeOfDivision.Gold]: {
    index: 3,
    cost: 13,
  },
  [typeOfDivision.Platinum]: {
    index: 4,
    cost: 18,
  },
  [typeOfDivision.Diamond]: {
    index: 5,
    cost: 24,
  },
  [typeOfDivision.Masters]: {
    index: 6,
    cost: 150
  }
};

// dunno how to define direct props of object. Example: modeCost = {2: {index:1, cost:1}}.
// 2 has been replaced by typeOfMode.Joust but how can i define that in typescript
// interface modeCostInterface {
//   index: number;
//   cost: number;
// }

enum typeOfMode {
  Conquest = 1,
  Joust,
  Duel
}

enum typeOfServiceEnum {
  SoloBoosting = 1,
  WithOwner,
  DuoTripleBoost
}


export const modeCost: any = {
  [typeOfMode.Joust]: {
    index: 1,
    cost: 1,
  },
  [typeOfMode.Conquest]: {
    index: 2,
    cost: 1,
  },
  [typeOfMode.Duel]: {
    index: 3,
    cost: 1,
  },
};

export const typeOfService: any = {
  [typeOfServiceEnum.WithOwner]: {
    index: 1,
    cost: 1.5,
  },
  [typeOfServiceEnum.SoloBoosting]: {
    index: 2,
    cost: 1,
  },
  [typeOfServiceEnum.DuoTripleBoost]: {
    index: 3,
    cost: 1,
  },
};

//@ts-ignore
export const calculate = (
  current: any,
  to: any,
  byMode: any,
  serviceObj: any
) => {

  let modeSelectionCost: any = modeCost[byMode.mode.toLowerCase()].cost;
  let serviceCost: any = typeOfService[serviceObj.service].cost;

  let costToFinishDivision: any =
  current.division === to.division ? divisionsCost[current.division.toLowerCase()].cost * (current.tier - to.tier) 
  : (current.tier - 1) * divisionsCost[current.division.toLowerCase()].cost


  let costThroughDivisions = 0;

  for (
    let i = divisionsCost[current.division.toLowerCase()].index + 1;
    i < divisionsCost[to.division.toLowerCase()].index;
    i++
  ) {
    let division: any = null;
    // eslint-disable-next-line array-callback-return
    Object.keys(divisionsCost).find((div) => {
      if (i === divisionsCost[div].index) {
        division = divisionsCost[div];
        // eslint-disable-next-line array-callback-return
        return;
      }
    });
    if (division) {  
      costThroughDivisions += division.cost * 5;
    }
  }

  let costToDestinationTier = 0;

  for (
    let i = divisionsCost[current.division.toLowerCase()].index;
    i < divisionsCost[to.division.toLowerCase()].index;
    i++
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let division: any = null;
    // eslint-disable-next-line array-callback-return
    Object.keys(divisionsCost).find((div) => {
      if (i === divisionsCost[div].index) {
        division = divisionsCost[div];
        // eslint-disable-next-line array-callback-return
        return;
      }
    });
    if (divisionsCost[current.division.toLowerCase()].index + 1 === divisionsCost[to.division.toLowerCase()].index ) {
      costToDestinationTier += (6 - to.tier) * divisionsCost[to.division.toLowerCase()].cost;
   }
   else if (divisionsCost[current.division.toLowerCase()].index + 2 === divisionsCost[to.division.toLowerCase()].index) {
    costToDestinationTier += (6 - to.tier) * divisionsCost[to.division.toLowerCase()].cost / 2;
   }
   else if (divisionsCost[current.division.toLowerCase()].index + 3 === divisionsCost[to.division.toLowerCase()].index) {
    costToDestinationTier += (6 - to.tier) * divisionsCost[to.division.toLowerCase()].cost / 3;
   }
   else if(divisionsCost[current.division.toLowerCase()].index + 4 === divisionsCost[to.division.toLowerCase()].index) {
   costToDestinationTier += (6 - to.tier) * divisionsCost[to.division.toLowerCase()].cost / 4;
  }
  else if(divisionsCost[current.division.toLowerCase()].index + 5 === divisionsCost[to.division.toLowerCase()].index) {
   costToDestinationTier += (6 - to.tier) * divisionsCost[to.division.toLowerCase()].cost / 5;
  }
   }

  return (
    (costToFinishDivision + costThroughDivisions + costToDestinationTier) * serviceCost * modeSelectionCost
  );
};


export const modeToString = (mode: number) => {
  if (mode === 1) {
    return "Joust";
  }
  else if (mode === 2) {
    return "Conquest";
  }
  else {
    return "Duel";
  }
}

export const tierToString = (tier: number) => {
  if(tier === 1) {
    return "I";
  }
  else if(tier === 2) {
    return "II";
  }
  else if(tier === 3) {
    return "III";
  }
  else if(tier === 4) {
    return "IV";
  }
  else {
    return "V";
  }
}

export const divisionToString = (division: number) => {
if (division === 1) {
  return "Bronze"
}
else if (division === 2) {
  return "Silver"
}
else if (division === 3) {
  return "Gold"
}
else if (division === 4) {
  return "Platinum"
}
else if (division === 5) {
  return "Diamond"
}
else if (division === 6) {
  return "Masters"
}
}

export const typeToString = (type: number)=> {
if (type === 1) {
  return "SoloBoosting"
}
else if(type === 2) {
  return "BoostingWithOwner"
}
else if(type === 3) {
  return "DuoTripleBoost"
}
}