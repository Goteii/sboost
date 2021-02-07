export interface ValuesFormBoosting {
  selectMode: number;
  currentDivision: number;
  currentTier: number;
  futureDivision: number;
  futureTier: number;
  typeOfService: number;
  extras: number;
  loginDetails: string;
  passwordDetails: string;
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

export interface AccountDetailsProps {
  insertLogin(event: React.ChangeEvent<HTMLInputElement>): void;
  insertPassword(event: React.ChangeEvent<HTMLInputElement>): void;
  valuesFormBoosting: ValuesFormBoosting;
  validateStep(): void;
  nextStep(): void;
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
