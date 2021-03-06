import React, { useRef } from 'react';



export default function MobileNav({theme, toggleNavbar}) {

    const mobileRef = useRef();

    const handleClick = () => {
        toggleNavbar()
        mobileRef.current.classList.toggle('fa-times');
    }


    

    
    return (
        <>
            <div className={`mobile-bars ${theme}`}>
                <i onClick={handleClick} ref={mobileRef} className='fas fa-bars'></i>
            </div>
        </>
    )
}
