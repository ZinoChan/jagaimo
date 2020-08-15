import React from 'react'
import { getProducts } from '../../actions/productsActions';



export default function MenuNav({dispatch}) {

    const handleBurgerClick = () => {
        dispatch(getProducts('burgers'));
    }

    const handlePizzaClick = () => {
        dispatch(getProducts('items'));
    }


    const handleIceCreamClick = () => {
        dispatch(getProducts('iceCream'));
    }

    const handleDrinksClick = () => {
        dispatch(getProducts('drinks'));
    }


    return (
        <>
            <button 
                className="nav-btn"
                onClick={handlePizzaClick}
            >
                <i className="fas fa-pizza-slice"></i>
                Pizza
            </button>
            <button className="nav-btn"
                onClick={handleBurgerClick}    
            >
                <i className="fas fa-hamburger"></i>
                    Burger
                </button>
            <button 
                className="nav-btn"
                onClick={handleDrinksClick}
            >
                <i className="fas fa-coffee"></i>
                Drinks
            </button>
            <button 
                className="nav-btn"
                onClick={handleIceCreamClick}
            >
                <i className="fas fa-ice-cream"></i>
                Icecream
            </button>  
        </>
    )
}
