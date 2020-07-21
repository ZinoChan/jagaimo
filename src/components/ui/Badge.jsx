import React from 'react'
import { useSelector } from 'react-redux'

const Badge = () => {
    const {cart} = useSelector(state => ({
        cart: state.cart
    }))

    return (
        <span className="badge">
            {cart.length}
        </span>
    )
}


export default Badge;