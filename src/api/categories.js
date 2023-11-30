import axios from "./axios";

const PRODUCT_ENDPOINT = "/categories";

export const getAllCategories = async () => {
  const { data } = await axios.get(PRODUCT_ENDPOINT);
  return data;
};
