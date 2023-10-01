import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";
let initialData = [];
export const cartData = (state, action) => {
  console.log(action);
  if (action.type === ADD_TO_CART) {
    initialData = [...initialData,action.data];
    return initialData;
  } else if (action.type === REMOVE_FROM_CART) {
    initialData = initialData.filter((product) => product.id !== parseInt(action.data));
    return initialData;
  } else if (action.type === EMPTY_CART) {
    initialData = [];
    return initialData;
  } else {
    return initialData;
  }
};
