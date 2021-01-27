export interface OrderResponse {
  id: number,
  userId: number,
  mode: string,
  boostingType: string,
  orderState: string,
  currentTier: string,
  futureTier: string,
  currentDivision: string,
  futureDivision: string
}

export interface OrderPayload extends OrderResponse {}