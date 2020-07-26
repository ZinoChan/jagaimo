import React, { useRef } from 'react'
import * as ROUTES from '../../constants/routes';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../actions/authActions';
import MobileNav from './MobileNav';
//import Badge from './Badge';




const VerticalNav = ({ isAuth, theme}) =>  {

    const dispatch =  useDispatch();

    const handleSignOutClick = () => dispatch(signOut());

    const navRef = useRef();

    const toggleNavbar = () => {
        navRef.current.classList.toggle('openNav');
    };
    
   

    return (
        <>
        <div ref={navRef} className={`v-nav ${theme}`}>
            <nav className="v-navbar">              
                <ul className="navbar-main-list mx-auto">
                    <NavLink    
                        exact  
                        to={ROUTES.HOME} 
                        style={{marginBottom: 'auto'}}
                    >
                        <div className="logo-img"/>
                    </NavLink>
                    <NavLink exact  to={ROUTES.HOME} className="nav-btn" activeClassName="active">
                        <i className="fas fa-home mb-1"></i>
                        <span>Home</span>
                    </NavLink>

                    <NavLink  to={ROUTES.MENU} className="nav-btn" activeClassName="active">
                        <i className="fas fa-utensils mb-1"></i>
                        <span>Menu</span>
                    </NavLink>
                    <>
                       { isAuth ? 
                       <>
                       <NavLink to={ROUTES.PROFILE} className="nav-btn" activeClassName="active">
                            <i className="fas fa-user mb-1"></i>
                            <span>Profile</span>
                        </NavLink>
                        <li 
                            className="nav-btn"
                            onClick={handleSignOutClick}
                            style={{cursor: 'pointer'}}
                        >
                            <i className="fas fa-sign-out-alt mb-1"></i>
                            <span>Sign Out</span>
                        </li>
                        </>
                        :
                        <>
                        <NavLink to={ROUTES.SIGNIN} className="nav-btn">
                            <i className="fas fa-sign-in-alt mb-1"></i>
                            <span>SignIn</span>
                        </NavLink> 
                        <NavLink to={ROUTES.SIGNUP} className="nav-btn">
                            <i className="fas fa-user-plus mb-1"></i>
                            <span>SignUp</span>
                        </NavLink>
                        </>
                       }
                    </>
                    <NavLink 
                        to={'/contact'}  
                        className="nav-btn position-relative" 
                        activeClassName="active"  
                        style={{marginTop: 'auto'}}   
                    >
                        <i className="fas fa-sms mb-1"></i>
                        <span>Contact</span>
                    
                    </NavLink>
                </ul>              
            </nav>
        </div>
        <MobileNav theme={theme} toggleNavbar={toggleNavbar}/>
        </>
    )
}


export default VerticalNav;
