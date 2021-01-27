import { baseInstance } from "../../instance";

import { ApiResult } from "../../models";
import {
  OpinionPayload,
  OpinionResponse,
  UpdateOpinionPayload,
} from "./models";

const API_ADDRESS = "Opinion/";

export const getOpinions = () => {
  return baseInstance.get<null, ApiResult<OpinionResponse>>(`${API_ADDRESS}`);
};

export const createOpinion = (opinion: OpinionPayload) => {
  return baseInstance.post<OpinionPayload, ApiResult<boolean>>(
    `${API_ADDRESS}`,
    opinion
  );
};

export const deleteOpinion = (id: number) => {
  return baseInstance.delete<number, null>(`${API_ADDRESS}`, {
    params: {
      id: id,
    }
  });
};

export const updateState = (opinion: UpdateOpinionPayload) => {
  return baseInstance.patch<UpdateOpinionPayload, ApiResult<boolean>>(
    `${API_ADDRESS}`,
    opinion
  );
};
