import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../StateProvide/Reducer";
import { useStateValue } from "../../StateProvide/StateProvider";

import "./TotalValue.css";

const TotalValue = () => {
  const [{basket}, dispatch] =  useStateValue()
  return (
    <div className="totalValue">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className='totalValue_text'>
              Total ({basket.length} items): <strong>{` ${value}`}</strong>
            </p>
            <small className="totalvalue_gift">
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        prefix="$"
        thousandSeparator={true}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default TotalValue;
