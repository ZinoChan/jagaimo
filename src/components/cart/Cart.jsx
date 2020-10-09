import React from 'react'

import CartItem from '../../components/cart/CartItem'
import Boundary from '../../components/ui/Boundary';
import CartTotal from '../../components/cart/CartTotal';
import { motion } from 'framer-motion';

//import HeartSpinner from '../ui/HeartSpinner';



const Cart = ({dispatch, cart}) => {

    const count = cart.length === 0 ? `no items ` : cart.length === 1 ? 
    `${cart.length }item ` :   `${cart.length} items `;
    



    return (
        <Boundary>
            <motion.div
                initial={{x: "100vw"}}
                animate={{x: 0}}
                transition={{ease: "easeIn", duration: 0.5}} 
                className="cart"
            >
                <div className="cart-wrapper">
                    <div className="cart-header mb-1 mt-5">
                        <h2>You have {count} in your Basket</h2>
                    </div>
                    <div className="cart-content">
                    {
                    cart.length !== 0 ? <CartTotal/> : ''
                    } 
                        {
                            
                            cart.length !== 0 ?
                            <div className="cart-items">
                                {    
                                    cart.map(item => (
                                        <CartItem 
                                            item={item} 
                                            key={item.id}
                                            dispatch={dispatch}
                                        />
                                    )) 
                                }
                            </div>
                            :
                            <div className="empty-cart mt-5">
                                <div className="empty-cart-img"/>
                            </div>
                        }
                    </div>
                </div>
              
            </motion.div>
        </Boundary>
    );
}


export default Cart;
