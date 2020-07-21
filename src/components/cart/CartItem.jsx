import React from 'react'
//import { motion } from 'framer-motion';
import { removeItem } from '../../actions/cartActions';
import ItemControlBtns from './ItemControlBtns';




const CartItem = ({item, dispatch}) =>  {
    
    /*const slideIn = {
        hidden: { y: -20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            ease: "linear", 
            duration: 1,
            delay: 0.5
        }
        }
      };*/

      const onRemoveItemClick = () => {
        dispatch(removeItem(item.id));
    }
    
     

    return (
        <div className="cart-item mb-1" >
            <div className="cart-img" style={{backgroundImage: `url(${item.image})`}}/> 
            <div className="cart-item-info mb-1">
                <h3>{item.title}</h3>
                <span className="text-muted">{item.category}</span>
                <span className="price">${item.price}</span>
            </div>
            <ItemControlBtns dispatch={dispatch} item={item}/>
            <div className="delete">
                <i 
                    className="far fa-trash-alt"
                    onClick={onRemoveItemClick}
                ></i>
            </div>
        </div>
    )
}


export default CartItem;
