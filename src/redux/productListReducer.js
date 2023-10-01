import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";
let initialData = [];
console.log('hi aan',initialData)
export const ProductListReducer = (state=initialData, action) => {
  console.log(action,"____",state,initialData,"_______________________________");
  if (action.type === PRODUCT_LIST) {
    return state;
  }
  if (action.type === SET_PRODUCT_LIST) {
    return [...action.data];
  } else {
    console.log('object')
    return state;
  }
};
