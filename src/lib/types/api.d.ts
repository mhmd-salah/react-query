declare type SuccessFulResponse<T> = {
  status: "success";
  stateCode: number;
  data: T;
};

declare type ErrorResponse = {
  status: "error" | "fail";
  statusCode: number;
  message: string;
};

declare type APIResponse<T> = SuccessFulResponse<T> | ErrorResponse;

declare type PaginatedData<T> = {
  [key: string]: T;
  pagination: {
    total: number;
    count: number;
    pages: number;
    limit: number;
    page: number;
  };
};

declare type DatabaseProperties = {
  createAt: string;
  updateAt: string;
  _id: string;
};
