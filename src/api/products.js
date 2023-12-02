import axios from "./axios";
import { parseParams } from "@/utils/apiUtils";

const PRODUCT_ENDPOINT = "/products";

export const getAllProducts = async (
  filterOptions = null,
  sortOptions = null
) => {
  const queryParams = {
    ...filterOptions,
    ...sortOptions,
  };
  const { data } = await axios.get(PRODUCT_ENDPOINT, {
    params: queryParams,
    paramsSerializer: (params) => parseParams(params),
  });

  return data;
};
