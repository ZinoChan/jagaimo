import React from 'react'
import * as ROUTE from '../constants/routes';
import VerticalNav from '../components/ui/VerticalNav';
import { Redirect, Route } from 'react-router-dom';
//import { motion } from 'framer-motion';
import { connect } from 'react-redux';

const PublicRoute = ({ isAuth, userType, path, component: Component, ...rest}) => {
    
    return (
       <Route 
            {...rest}
            component={props => (
                (isAuth  && userType === 'client') && (path === ROUTE.SIGNIN || path === ROUTE.SIGNUP) ?
                    
                    <Redirect to={ROUTE.MENU}/>
                    
                    :
                    path === ROUTE.SIGNIN || path === ROUTE.SIGNUP || path === ROUTE.HOME ?
                    <>
                        <Component {...props}/>
                    </>
                    :
                    <>
                        <VerticalNav path={path} isAuth={isAuth} theme="nav-light"/>
                        <Component {...props}/>
                    </>
                    
                    
            )}
       />
    )
}

const mapStateToProps = ({auth}) => ({
    isAuth: !!auth.id && !!auth.type,
    userType: auth.type
})


export default connect(mapStateToProps)(PublicRoute);
