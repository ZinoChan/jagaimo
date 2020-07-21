import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../actions/cartActions';
import { MENU } from '../../constants/routes';


const ItemDetails = (props)  => {
    const dispatch = useDispatch();
    const { item } = useSelector(state => ({
        item: state.products.items.find(item => item.id === props.match.params.item_id)
    }))
    
    const onOrderClick = () => {
        dispatch(addItem(item));
    }

    
    

    return (
        <>
        {
            !item ? <div>Nothing</div>   
        :
        (<div className="item-details">
            <div className="details-header">
                <Link to={MENU}>Back to Menu</Link>
            </div>
            <div className="item-details-content">
                <div className="detail-content-img" style={{backgroundImage: `url(${item.image})`}}/>
                <div className="item-details-info">
                    <h2>{item.title}</h2>
                    <p>
                        {item.descriptin}
                    </p>
                    <div className="item-size">
                        <h3>Size:</h3>
                        <button className="btn-light">Small 230g</button>
                        <button className="btn-light active">Medium 530g</button>
                        <button className="btn-light">Large860g</button>
                    </div>
                    <div className="item-toppings">
                        <h3>Toppings:</h3>
                        <button className="btn-light">Tomato</button>
                        <button className="btn-light active">Tomato</button>
                        <button className="btn-light active">Tomato</button>
                    </div>
                    <div className="item-price">
                        <span className="price mr-3">$13.49</span>
                        <button 
                            className="main-btn"
                            onClick={onOrderClick}
                        >Place order</button>
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
    )
}


export default ItemDetails;
