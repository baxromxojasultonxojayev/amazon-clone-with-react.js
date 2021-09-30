import React from "react";
import { useStateValue } from "../../StateProvide/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Header from "../Header/Header";
import TotalValue from "../TotalValue/TotalValue";
import "./Checkout.css";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_add"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          {basket?.length === 0 ? (
            <div>
              <h2 className="checkout_title">
                There are no any products in your basket
              </h2>
            </div>
          ) : (
            <div>
              <h2 className="checkout_title">
                Your shopping basket is included:{" "}
              </h2>

              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  image1={item.image1}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>

        {basket.length > 0 && (
          <div className="checkout_right">
            <h1>
              <TotalValue />
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
