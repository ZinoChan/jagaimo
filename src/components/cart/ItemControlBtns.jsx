import React from 'react';
import { addQty , minusQty } from '../../actions/cartActions';

const ItemControlBtns = ({dispatch, item}) =>  {
    
    const onAddQtyClick = () => {
        dispatch(addQty(item.id));
    }

    const onMinusQtyClick = () => {
            dispatch(minusQty(item.id));
    }


    
    return (
        <div className="control-btns">
                <button 
                    className="btn-light"
                    onClick={onAddQtyClick}
                >+</button>
                <span className="quantity">{item.quantity || 0}</span>
                <button 
                    className="btn-light"
                    onClick={onMinusQtyClick}
                    disabled={!item.quantity || item.quantity === 1}    
                >-</button>
        </div>
            
    )
}


export default ItemControlBtns;
