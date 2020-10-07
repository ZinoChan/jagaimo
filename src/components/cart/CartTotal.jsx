import React from 'react';
import {  withRouter } from 'react-router-dom';
import { CHECKOUT_STEP_1, SIGNIN } from '../../constants/routes';
import { displayActionMessage } from '../../helpers/utils';
import { useSelector } from 'react-redux';


const  CartTotal = ({history}) =>  {

    const {cart, isAuth} = useSelector(state => ({
        isAuth: !!state.auth.id && !!state.auth.type,
        cart: state.cart
        }) 
    )


    const handleCheckout = () => {
        if(!isAuth){
            displayActionMessage('You Have To Sing In to Checkout', 'error');
            history.push(SIGNIN);
        }else{
            history.push(CHECKOUT_STEP_1);
        }
    }

    const grandTotal = () => {
        if(cart.length !== 0){
            return cart.reduce((sum, i) => {
                return sum + (i.price * i.quantity)
              }, 0).toFixed(2);
        }
    };

    const tax = grandTotal() ? (grandTotal() * 0.05).toFixed(2) : 0;

    const Total =  tax !== 0 ? parseFloat(tax) + parseFloat(grandTotal()): 0; 



    return (
        <div className="cart-total">
          <div className="sub-total">
              <span>Sub Total</span>
              <span className="total-price">{grandTotal()}</span>
          </div>
          <div className="tax">
              <span>Tax 5%</span>
              <span className="total-tax">${tax}</span>
          </div>
          <div className="total">
                <span>Total</span>
                <span>${Total.toFixed(2)}</span>
          </div>
          <button
            className="main-btn checkout-btn"
            onClick={handleCheckout} 
            >
              Process to checkout
          </button>
        </div>
    )
}


export default withRouter(CartTotal);