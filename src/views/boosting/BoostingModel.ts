export interface ValuesFormBoosting {
  selectMode: number;
  currentDivision: number;
  currentTier: number;
  futureDivision: number;
  futureTier: number;
  typeOfService: number;
  extras: number;
  error: string;
  moneyCounter: Array<any>;
}

export interface BoostingModeSelectionProps {
  nextStep(): void;
  handleChange(e: any): void;
  valuesFormBoosting: ValuesFormBoosting;
  validateStep(): void;
}

export interface SelectionProps extends BoostingModeSelectionProps {
  previousStep(): void;
}

export interface SelectionPropsCalculation extends BoostingModeSelectionProps {
  previousStep(): void;
  costCurrent: object;
  costFuture: object;
  modeCost: object;
  service: object;
  sendOrderToDb(): void;
}
