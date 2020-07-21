import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { HOME } from '../constants/routes';
import VerticalNav from '../components/ui/VerticalNav';
import { useSelector } from 'react-redux';
import { PROFILE } from '../constants/routes';
import { motion } from 'framer-motion';



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
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{ease: "easeIn", duration: 0.5}}
                    >
                        <VerticalNav isAuth={isAuth} theme="nav-light"/>
                        <Component {...props}/>
                    </motion.div>
                    </>
                    
                : 
                <>
                <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{ease: "easeIn", duration: 0.5}}
                    >
                    <Component {...props}/>
                </motion.div>
                </>
                :
                    <Redirect to={HOME}/>
            )

            }
        />
    )    
}
    



export default PrivateRoute;
