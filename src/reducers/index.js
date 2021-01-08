
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import profileReducer from "./profileReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import shippingReducer from "./shippingReducer";




 const rootReducer =  ({
    app: appReducer,
    auth: authReducer,
    products: productsReducer,
    profile: profileReducer,
    cart: cartReducer,
    user: userReducer,
    shipping: shippingReducer,
});

export default rootReducer;