import React, {useEffect, useRef} from 'react'
import Boundary from '../../components/ui/Boundary';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productsActions';

import ProductItem from '../../components/product/ProductItem';

import MenuNav from '../../components/ui/MenuNav';
import Search from '../../components/ui/Search';
import Cart from '../../components/cart/Cart';
import MobileCart from '../../components/ui/MobileCart'
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion';




const Menu = () => {

    const dispatch = useDispatch();
    const { items, isLoading, cart } = useSelector(state => ({
        items: state.products.items,
        isLoading: state.app.loading,
        cart: state.cart,
    }))
    
    
    useEffect(() => {
        if(items.length === 0){
            dispatch(getProducts('items'));
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const inCart = (id) => !!cart.find(item => item.id === id);

    const cartRef  = useRef();

    const toggleCart = () => {
        cartRef.current.classList.toggle('openCart');
    };
    
  

    return (
        <Boundary>
           
           <motion.div
           className="menu"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ease: "easeIn", duration: 0.5}}>
    
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
                            new Array(8).fill({}).map((item, index) => (
                                <div className="mb-3" key={index}>
                                    <Skeleton height={200}/>
                                    <Skeleton count={3}/>
                                </div>
                            ))}    
                        </div>
                    </div>
                </div>
                <div className="cart-info" ref={cartRef}>
                    <Cart 
                        dispatch={dispatch} 
                        isLoading={isLoading} 
                        cart={cart} 
                    />
                </div>
            </motion.div>
            <MobileCart theme="nav-light" toggleCart={toggleCart}/>
        </Boundary>
    )
}


export default Menu;
