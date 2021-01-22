import React from 'react'
import { Link } from 'react-router-dom'
import { CHECKOUT_STEP_1, MENU } from '../../constants/routes'

const Popup = () => {
  return (
    <div style={{minWidth: "100vw", 
    minHeight: "100vh", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center",
    flexWrap: "wrap"
    }}>
      <button className="auth-btn mr-4">
        <Link style={{color: "#fff"}} to={MENU}>Back To Menu</Link>
      </button>
      <button className="auth-btn">
      <Link style={{color: "#fff"}} to={CHECKOUT_STEP_1}>Process To Checkout</Link>
      </button>
    </div>
  )
}

export default Popup
