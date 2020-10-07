import React from 'react';
import { removeItem } from '../../actions/cartActions';
import ItemControlBtns from './ItemControlBtns';




const CartItem = ({item, dispatch}) =>  {
    
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
