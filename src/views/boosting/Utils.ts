export const divisionsCost: any = {
  1: {
    index: 1,
    cost: 7,
  },
  2: {
    index: 2,
    cost: 10,
  },
  3: {
    index: 3,
    cost: 13,
  },
  4: {
    index: 4,
    cost: 18,
  },
  5: {
    index: 5,
    cost: 24,
  },
  6: {
    index: 6,
    cost: 150
  }
};

export const modeCost: any = {
  2: {
    index: 1,
    cost: 1,
  },
  1: {
    index: 2,
    cost: 1,
  },
  3: {
    index: 3,
    cost: 1,
  },
};

export const typeOfService: any = {
  2: {
    index: 1,
    cost: 1,
  },
  1: {
    index: 2,
    cost: 1,
  },
  3: {
    index: 3,
    cost: 1.5,
  },
};

//@ts-ignore
export const calculate = (
  current: any,
  to: any,
  byMode: any,
  serviceObj: any
) => {
  //calculate how much to finish current division so you don't charge for a whole division
  //current tier - 1 to see how many are left --- tier 4 to 1 would be 3 so -1 works
  //multiply by cost basis for that division

  let modeSelectionCost: any = modeCost[byMode.mode.toLowerCase()].cost;
  let serviceCost: any = typeOfService[serviceObj.service].cost;

  // let costToFinishDivision: any =
  //   current.tier - 1 !== 0 && current.division !== to.division
  //     ? (current.tier - 1) * divisionsCost[current.division.toLowerCase()].cost
  //     :  divisionsCost[current.division.toLowerCase()].cost * (current.tier - to.tier);

  let costToFinishDivision: any =
  current.division === to.division ? divisionsCost[current.division.toLowerCase()].cost * (current.tier - to.tier) 
  // : current.tier - 1 !== 0 ? (current.tier - 1) * divisionsCost[current.division.toLowerCase()].cost 
  : current.tier -1  === 0 && current.tier - to.tier === -4 ? (current.tier) * divisionsCost[to.division.toLowerCase()].cost
  : (current.tier - 1) * divisionsCost[current.division.toLowerCase()].cost
  // : to.division - current.division === 1 && current.tier - to.tier <= 0 ? divisionsCost[to.division.toLowerCase()].cost * 

  //run through each division calculation
  //start at +1 because you've already calculated the cost to finish the current division
  //only compare < because it will stop short of the division they selected, which you don't want to charge whole price for if they only selected a certain tier
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
      //find can return undefined, might as well account for it
      costThroughDivisions += division.cost * 5; //times 5 because it's going through all tiers
    }
  }

  //now you have through the divisions and the cost to finish their current division
  //now calculate to get them to their desired tier
  //starts at 5, subtract by their destination to find the difference

  // let costToDestinationTier =
  //   (5 - to.tier) * divisionsCost[to.division.toLowerCase()].cost;

  //return the sum
  console.log(
    "Individual Costs",
    costToFinishDivision,
    costThroughDivisions,
    // costToDestinationTier,
    modeSelectionCost,
    serviceCost
  );
  return (
    (costToFinishDivision + costThroughDivisions) * serviceCost * modeSelectionCost
     
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