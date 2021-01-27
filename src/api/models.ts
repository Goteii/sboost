import { AxiosResponse } from "axios";

export interface RequestResult<T> {
  result: T | T[],
  success: boolean,
  errorList: string[]
}


export interface ApiResult<T> extends Promise<AxiosResponse<RequestResult<T>>> {
}