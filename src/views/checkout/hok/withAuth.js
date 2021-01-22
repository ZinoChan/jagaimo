import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom';
import { SIGNIN, MENU} from '../../../constants/routes';



const withAuth = (Component) => {
    

    return withRouter((props) => {
        
       

        const {cart, profile, isAuth, isAuthenticating} = useSelector(state => ({
            cart: state.cart,
            profile: state.profile,
            isAuth: !!state.auth.id && !!state.auth.type,
            isAuthenticating: state.app.isAuthenticating,
        }));

        const dispatch = useDispatch();
    
        const grandTotal = () => {
            if(cart.length !== 0){
                return cart.reduce((sum, i) => {
                    return sum + (i.price * i.quantity)
                  }, 0).toFixed(2);
            }
        };
        

        return (
            <>
           
                {!isAuth ?
                    <Redirect to={SIGNIN}/> 
                   
                    :
                cart.length === 0 ? 
                    <Redirect to={MENU}/> :
                    null 
                }  
                    <Component 
                        {...props}
                        cart={cart}
                        profile={profile}
                        total={grandTotal()}
                        dispatch={dispatch}
                        isAuthenticating={isAuthenticating}
                    />
            </>
        )
    })
    
}


export default withAuth;