import React from 'react'

const ProductModalDetails = () => {
    return (
        <div className="modal-details">
            <div className="product-img"/>
            <div className="product-info">
                <div className="product-description">
                    <h2 className="mb-1">Napolitain</h2>
                    <p>Popular Italian pizza whitch contain ingredients</p>
                </div>
                <div className="produc-size">
                    <button className="btn-light">SMALL <span className="text-muted">320g</span> </button>
                    <button className="btn-light">MEDIUM <span className="text-muted">520g</span></button>
                    <button className="btn-light">LARGE <span className="text-muted">860g</span></button>
                </div>
                <div className="product-toppings">
                    <buttoon className="btn-light">Roasted Beef</buttoon>
                    <buttoon className="btn-light">Muchrooms</buttoon>
                    <buttoon className="btn-light">Cheese</buttoon>
                </div>
            </div>
        </div>
    )
}


export default ProductModalDetails;
