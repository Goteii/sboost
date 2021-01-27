export interface ValuesFormCoaching {
  selectLevelOfCoaching: string;
  price: number;
  selectMode: string;
}

export interface CoachingFormState {
  step: number;
  selectLevelOfCoaching: string;
  price: number;
  selectMode: string;
}

export interface CoachingViewProps {
  valuesFormCoaching: ValuesFormCoaching;
  nextStep(): void;
  getRank(rank: string, priceAmount: number): void;
}

export interface CoachingSelectMode {
  valuesFormCoaching: ValuesFormCoaching;
  nextStep(): void;
  prevStep(): void;
  chooseDivision(rank: string): void;
}
