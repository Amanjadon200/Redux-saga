import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

const addToCart=(data)=>{
    console.log(data)
    return {
        type:ADD_TO_CART,
        data
    }
}
const RemoveFromCart=(id)=>{
return {
    type:REMOVE_FROM_CART,
    data:id
}
}
const EmptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
export { addToCart, RemoveFromCart, EmptyCart };