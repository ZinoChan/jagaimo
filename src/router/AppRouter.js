import React from 'react'
import {  Switch,  Route, useLocation } from 'react-router-dom';
import * as ROUTE from '../constants/routes';
import { createBrowserHistory } from 'history';
//import { AnimatePresence } from 'framer-motion';


import PrivateRoute from './ClientRoute';
import PublicRoute from './PublicRoute';
import HeartSpinner from '../components/ui/HeartSpinner';

// import Home from '../views/home/Home';
// import Menu from '../views/menu/Menu';
// import SignIn from '../views/auth/SignIn';
// import SignUp from '../views/auth/SignUp';
// import Profile from '../views/account/Profile';
// import Summary from '../views/checkout/Summary';
// import Details from '../views/checkout/Details';
// import Payment from '../views/checkout/Payment';
// import ItemDetails from '../components/cart/ItemDetails';




const Home = React.lazy(() => import('../views/home/Home'));
const Menu = React.lazy(() => import('../views/menu/Menu'));
const SignIn = React.lazy(() => import('../views/auth/SignIn'));
const SignUp = React.lazy(() => import('../views/auth/SignUp'));
const Profile = React.lazy(() => import('../views/account/Profile'));
const Summary = React.lazy(() => import('../views/checkout/Summary'));
const Details = React.lazy(() => import('../views/checkout/Details'));
const Payment = React.lazy(() => import('../views/checkout/Payment'));
const Contact = React.lazy(() => import('../views/contact/Contact'));




export const history = createBrowserHistory();

const AppRouter = () =>  {

    const location = useLocation();

    return(
        <>
        <React.Suspense fallback={<HeartSpinner/>}>
        {/* <AnimatePresence> */}
            <Switch location={location} key={location.key}>
                <PublicRoute
                    component={Home}
                    exact
                    path={ROUTE.HOME}                  
                />
                <PublicRoute
                    component={Menu}          
                    path={ROUTE.MENU}
                />
                <PublicRoute
                    component={SignIn}
                    path={ROUTE.SIGNIN}
                />
                 <PublicRoute
                    component={SignUp}
                    path={ROUTE.SIGNUP}
                />
                <PublicRoute
                    component={Contact}
                    path={ROUTE.CONTACT}
                />
                <PrivateRoute
                    component={Profile}
                    path={ROUTE.PROFILE}
                />
                <PrivateRoute
                    component={Summary}
                    path={ROUTE.CHECKOUT_STEP_1}
                />
                 <PrivateRoute
                    component={Details}
                    path={ROUTE.CHECKOUT_STEP_2}
                />
                 <PrivateRoute
                    component={Payment}
                    path={ROUTE.CHECKOUT_STEP_3}
                />
            </Switch>  
        {/* </AnimatePresence>   */}
       </React.Suspense>
        </>
    )

}

export default AppRouter;
