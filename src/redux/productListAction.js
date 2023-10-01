import { PRODUCT_LIST } from "./constant";

export const ProductList =(data) => {
  console.log('mai hu action')
  return {
    type: PRODUCT_LIST,
    data,
  };
};
