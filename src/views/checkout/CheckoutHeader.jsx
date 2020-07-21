import React from 'react';

const  CheckoutHeader = ({current}) => {
    const className = (step) => {
        return step === current ? 'active_step' : step < current ? 'done_step' : '';
    }

    return (
        <div className="checkout">
            <div className="checkout-header">
                <div className={`summary-tab ${className(1)}`}>
                    <i className="fas fa-dolly"></i>
                    <h3>Order Summury</h3>
                </div>
                <div className={`client-info ${className(2)}`}>
                    <i className="far fa-address-card"></i>
                    <h3>Your personnel Details</h3>
                </div>
                <div className={`payment-tab ${className(3)}`}>
                    <i className="fas fa-money-check-alt"></i>
                    <h3>Payment method</h3>
                </div>
            </div>
        </div>
    )
}


export default CheckoutHeader;
