import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { HOME } from '../constants/routes';
import VerticalNav from '../components/ui/VerticalNav';
import { useSelector } from 'react-redux';
import { PROFILE } from '../constants/routes';




const PrivateRoute = ({ path, component: Component, ...rest}) => {
    
    const {isAuth, userType} = useSelector(state => ({
        isAuth: !!state.auth.id && !!state.auth.type,
        userType: state.auth.type
    }))

    return(
        <Route
            {...rest}
            component={props => (
                (isAuth && userType === 'client') ?  path === PROFILE ?
                    <>
                        <VerticalNav isAuth={isAuth} theme="nav-light"/>
                        <Component {...props}/>
                   
                    </>
                    
                : 
                <>
                    <Component {...props}/>
                </>
                :
                    <Redirect to={HOME}/>
            )

            }
        />
    )    
}
    



export default PrivateRoute;
