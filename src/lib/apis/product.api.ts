import { API } from "../constant/api.constant";

const BASE_URL = API + "/products";

export const getProducts = async () => {
  const response = await fetch(BASE_URL);

  const payload: APIResponse<PaginatedData<Product[]>> = await response.json();
  return payload;
};
