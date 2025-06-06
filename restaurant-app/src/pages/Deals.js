import React from "react";
import { Menu } from "../components/Menu";
import Deal1 from "../img/doubleBurger.jpg";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export const Deals = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (deal) => {
    addToCart(deal);
    navigate("/checkout");
  };

  return (
    <div>
      <Menu />

      <div className="container py-5">
        <div className="row justify-content-center">
          {/* Deal 1 */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm rounded">
              <img
                src={Deal1}
                className="card-img-top"
                alt="Veggie Hamburger"
                style={{ height: "500px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h6 className="text-danger fw-bold text-center">
                  Limited time
                </h6>
                <h5 className="card-title fw-bold text-center">
                  2 Classic Veggie Hamburger with Fries
                </h5>
                <p className="card-text text-center">$18.99</p>
                <div className="d-flex justify-content-center mt-auto">
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      handleAddToCart({
                        name: "2 Classic Veggie Hamburger with Fries",
                        price: 18.99,
                      })
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
