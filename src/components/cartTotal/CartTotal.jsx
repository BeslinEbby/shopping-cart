import React, { useContext } from 'react'
import Title from '../title/Title'
import { CartContext } from '../../contexts/CartContext'
import Price from '../price/Price'
import './CartTotal.css'

const CartTotal = () => {

    const {getCartTotal, shippingFee} = useContext(CartContext)

  return (
    <div className='cart-total'>
            <div className="cart-total-title">
                <Title text1={"CART"} text2={"TOTALS"}/>
            </div>
            <div className="cart-total-cnt">
                <div className='total-info'>
                    <p>SubTotal </p>
                    <span>-</span>
                    <Price price={getCartTotal()+".00"}/>
                </div>
                <hr />
                <div className='total-info'>
                    <p>Shipping Fee </p>
                    <span>-</span>
                    <Price price={shippingFee}/>
                </div>
                <hr />
                <div className='total-info'>
                    <b>Total </b>
                    <span>-</span>
                    <Price price={getCartTotal()+shippingFee+".00"}/>
                </div>
            </div>
    </div>
  )
}

export default CartTotal