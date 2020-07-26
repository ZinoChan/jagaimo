import React, {useEffect} from 'react'
import Boundary from '../../components/ui/Boundary';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productsActions';

import ProductItem from '../../components/product/ProductItem';
import  HeartSpinner from '../../components/ui/HeartSpinner';
import MenuNav from '../../components/ui/MenuNav';
import Search from '../../components/ui/Search';
import Cart from '../../components/cart/Cart';

//import { motion } from 'framer-motion';




const Menu = () => {

    const dispatch = useDispatch();
    const { items, isLoading, cart } = useSelector(state => ({
        items: state.products.items,
        isLoading: state.app.loading,
        cart: state.cart
    }))
    
    
    useEffect(() => {
        if(items.length === 0){
            dispatch(getProducts('items'));
        }
        
    }, []);

    const inCart = (id) => !!cart.find(item => item.id === id);
    
  

    return (
        <Boundary>
            
            <div
                className="menu"
            >
                <div className="menu-wrapper">
                    <div className="menu-header mx-auto mb-1">
                        <h2>Menu Category</h2>
                        <Search/>
                    </div>
                    <div className="menu-category mb-1">
                        <MenuNav dispatch={dispatch}/>
                    </div>
                    <div className="main-menu">
                        <div 
                            className="menu-items"
                            initial="hidden"
                            animate="visible"
                        >
                        {items.length !== 0 && !isLoading ?
                            
                            items.map(item => (
                                <ProductItem 
                                    key={item.id} 
                                    item={item}
                                    dispatch={dispatch}
                                    inCart={inCart}
                                />
                            )) 
                            :
                            <HeartSpinner/>
                        }    
                        </div>
                    </div>
                </div>
                <div className="cart-info">
                    <Cart 
                        dispatch={dispatch} 
                        isLoading={isLoading} 
                        cart={cart} 
                    />
                </div>
               
            </div>
        </Boundary>
    )
}


export default Menu;
