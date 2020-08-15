import React from 'react';
import { motion } from 'framer-motion';
import { addItem, removeItem } from '../../actions/cartActions';
import { displayActionMessage } from '../../helpers/utils';


const ProductItem = ({item, dispatch, inCart}) =>  {
        

    const onOrderClick = () => {
        if(inCart(item.id)){
            dispatch(removeItem(item.id));
            displayActionMessage('Order Canceled', 'info');
        }
        else{
            dispatch(addItem(item));
            displayActionMessage('Order Added to Basket', 'info');
        }
    }

    

    return (
        <motion.div 
            className="item"
            initial={{ scale: 0 }}
            animate={{  scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 320,
                damping: 25,
                durration: 1.5,
                delay: .6
            }}
  
        >
    
            <div className="item-img" style={{backgroundImage: `url(${item.image})`}}/> 
            <div className="item-info mb-1">
                <h3>{item.title}</h3>
                <span className="text-muted">{item.category}</span>
            </div>
            <div className="item-footer">
                <span className="price">${item.price}</span>
                <button 
                    className="main-btn"
                    onClick={onOrderClick}
                >
                    {inCart(item.id) ? 'Cancel order' : 'order'}
                </button>
            </div>
        </motion.div>
        
    )
}


export default ProductItem;