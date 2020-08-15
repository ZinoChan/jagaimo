import React, {useRef} from 'react'

export default function MobileCart({toggleCart}) {

    const handleClick = () => {
        toggleCart();
        cartBtnRef.current.classList.toggle('fa-times');
    }

    const cartBtnRef = useRef();

    return (
        <>
            <div className='mobile-cart nav-light' onClick={handleClick}>
                <i ref={cartBtnRef} className="fas fa-shopping-cart"></i>
            </div>  
        </>
    )
}
