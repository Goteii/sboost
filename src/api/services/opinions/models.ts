export interface OpinionResponse {
  id: number,
  userId: number,
  username: string,
  opinion: string,
  rating: number,
  createdAt: Date
}

export interface OpinionPayload {
  opinion: string,
  rating: number
}

export interface UpdateOpinionPayload {
  opinionId: number,
  opinion: string
}