interface ResponseInstant {
  msg: string;
  statusCode: number;
  error: boolean;
  failure: Array<any>;
}

export interface ReturnReponse<T> extends ResponseInstant {
  data: T;
}

export interface ReturnListReponse<T> extends ResponseInstant {
  data: Array<T>;
}

export interface ReturnDataReponse<T> {
  res: object;
  statusCode: number;
  message: string;
  data: T;
}
