import React from 'react'
import * as ROUTE from '../constants/routes';
import VerticalNav from '../components/ui/VerticalNav';
import {  Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Popup from '../components/ui/Popup';


const PublicRoute = ({isAuth, userType, path, component: Component, ...rest}) => {
    
  
    
    return (
       <Route 
            {...rest}
            render={(props) => {

                
                
            

            

               return (
                (isAuth  && userType === 'client') && (path === ROUTE.SIGNIN || path === ROUTE.SIGNUP) ?
                
                <Popup/>
                
                :
                path === ROUTE.SIGNIN || path === ROUTE.SIGNUP || path === ROUTE.HOME ?
                <>
                    <Component {...props}/>
                </>
                :
                <>
                    <VerticalNav path={path} isAuth={isAuth} theme="nav-light"/>
                    <Component {...props} />
                </>
                
               )
                    
            }}
       />
    )
}

const mapStateToProps = ({auth}) => ({
    isAuth: !!auth.id && !!auth.type,
    userType: auth.type,
    
})


export default connect(mapStateToProps)(PublicRoute);
