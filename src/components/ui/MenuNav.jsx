import React from 'react'
import { getProducts } from '../../actions/productsActions';
import { motion } from 'framer-motion';



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

    const variants = {
        visible: {
            y: 0,
            opacity: 1,
          transition: {
            duration: .7
          },
        },
        hidden: i => ({ opacity: 0, y: i }),
      }


    return (
        <>
            <motion.button 
                className="nav-btn"
                onClick={handlePizzaClick}
                variants={variants}
                custom={100}
                animate="visible"
                initial="hidden"
            >
                <i className="fas fa-pizza-slice"></i>
                Pizza
            </motion.button>
            <motion.button className="nav-btn"
                onClick={handleBurgerClick}  
                variants={variants}
                custom={-100}
                animate="visible"
                initial="hidden"  
            >
                <i className="fas fa-hamburger"></i>
                    Burger
                </motion.button>
            <motion.button 
                className="nav-btn"
                onClick={handleDrinksClick}
                variants={variants}
                custom={100}
                animate="visible"
                initial="hidden"
            >
                <i className="fas fa-coffee"></i>
                Drinks
            </motion.button>
            <motion.button 
                className="nav-btn"
                onClick={handleIceCreamClick}
                variants={variants}
                custom={-100}
                animate="visible"
                initial="hidden"
            >
                <i className="fas fa-ice-cream"></i>
                Icecream
            </motion.button>  
        </>
    )
}
