import React, {useContext} from 'react';
import './Cart.css';

import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

import { FoodContext } from '../contexts/FoodContext';

const Cart = () => {
  const {prices, items, numberWithCommas} = useContext(FoodContext);
    return (
      (prices > 0) && (
      <div className="cart-container">
        <div className="cart">
          <div className="cart-text">
            <p className="cart-price">
              <span>{items} Items</span>
              <span>|</span>
              <span>Rp {numberWithCommas(prices)}</span>
            </p>
            <p className="cart-info">termasuk ongkos kirim</p>
          </div>
          <div className="cart-icon">
            <LocalGroceryStoreOutlinedIcon />
            <ArrowForwardIosOutlinedIcon />
          </div>
        </div>
      </div>
      )
    )
}

export default Cart
