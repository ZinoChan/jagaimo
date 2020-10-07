import React from 'react';
import CartItem from '../../components/cart/CartItem';
import CheckoutHeader from './CheckoutHeader';
import {MENU, CHECKOUT_STEP_2} from '../../constants/routes';
import { Link } from 'react-router-dom';
import withAuth from './hok/withAuth';





const Summary = ({cart, dispatch, total}) => {

    const Tax = (total * 0.05).toFixed(2);

    return (
        <div className="summary">
            <CheckoutHeader current={1}/>
            <div className="summary-content">
                <div className="summary-items">
                {
                    cart.map(item => (
                        <CartItem item={item} key={item.id} dispatch={dispatch}/>
                    ))
                }
             </div>
             <div className="total-summary">
                <h2>Total</h2>
                <div className="total-info">
                    <div>
                        <h3>SubTotal:</h3>
                        <h3>Discount:</h3>
                        <h3>Tax</h3>
                    </div>
                    <div>
                        <h3>${total}</h3>
                        <h3>$0</h3>
                        <h3>${Tax}</h3>
                    </div>
                </div>
                <div className="main-total">
                    <h3>Total</h3>
                    <h3>${(parseFloat(total) + parseFloat(Tax)).toFixed(2)}</h3>
                </div>
             </div>
            </div>
            <div className="checkout-btns">
                <Link className="btn-light" to={MENU}>Back</Link>
                <Link className="btn-dark" to={CHECKOUT_STEP_2}>Continue</Link>
            </div>
        </div>
    )
}



export default withAuth(Summary);