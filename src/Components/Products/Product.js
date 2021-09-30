import React from 'react';
import { useStateValue } from '../../StateProvide/StateProvider';
import './Product.css'

const Product = ({id, title, price, rating, image, image1}) => {

  const [{basket}, dispatch] = useStateValue()

  // console.log(basket);

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        image1: image1,
        price: price,
        rating: rating
      }
    })
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="producr_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {
            Array(rating).fill().map((_) => (
              <p>&#9733;</p>
            ))
          }
        </div>
      </div>
        <img src={image} alt="" />
      <div>
        <img className="tv-image" src={image1} alt=""/>
      </div>
      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  );
};


export default Product;