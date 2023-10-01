/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { EmptyCart, RemoveFromCart, addToCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "../redux/productListAction";
import {product} from "../utils/product/index.js"

function Main() {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const result = useSelector((state) => state);
  const cartData = result.cartData;
  console.warn("data in Main", result);
  return (
    <div>
      <button onClick={() => dispatch(EmptyCart())}>Empty Cart</button>
      <button onClick={() => dispatch(ProductList())}>Product List</button>
      <div className="product-container">
        {product.map((item) => {
          return (
            <div key={item.id} className="product-item">
              <img src={item.photo} alt="" />
              <div>Name : {item.name} </div>
              <div>Color : {item.color} </div>
              <div>Price : {item.price} </div>
              <div>Category : {item.category} </div>
              <div>Id : {item.id} </div>
              <button
                onClick={() => {
                  setState(!state);
                  dispatch(addToCart(item));
                }}
              >
                Add To Cart
              </button>
              <button
                id={item.id}
                onClick={(e) => dispatch(RemoveFromCart(e.target.id))}
              >
                Remove From Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
