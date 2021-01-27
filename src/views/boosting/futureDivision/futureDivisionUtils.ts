import { silverConquest, silverConquestOff, goldConquest, goldConquestOff, platinumConquest, platinumConquestOff,
     diamondConquest, diamondConquestOff } from "../images/ExportedImages";


export const divisions = [
    {
      id: 1,
      name: "Silver",
      value: 2,
      imageOn: silverConquest,
      imageOff: silverConquestOff,
    },
    {
      id: 2,
      name: "Gold",
      value: 3,
      imageOn: goldConquest,
      imageOff: goldConquestOff,
    },
    {
      id: 3,
      name: "Platinum",
      value: 4,
      imageOn: platinumConquest,
      imageOff: platinumConquestOff,
    },
    {
      id: 4,
      name: "Diamond",
      value: 5,
      imageOn: diamondConquest,
      imageOff: diamondConquestOff,
    },
  ];

  export const tiers = [
    {
      id: 1,
      name: "5",
      value: 5,
      sign: "V",
    },
    {
      id: 2,
      name: "4",
      value: 4,
      sign: "IV",
    },
    {
      id: 3,
      name: "3",
      value: 3,
      sign: "III",
    },
    {
      id: 4,
      name: "2",
      value: 2,
      sign: "II",
    },
    {
      id: 5,
      name: "1",
      value: 1,
      sign: "I",
    },
  ];