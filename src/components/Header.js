import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const result = useSelector((state) => state);
  console.warn("data in header", result);
  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.cartData.length}</span>
        <Link to="/cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
