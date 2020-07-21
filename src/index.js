import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import './styles/style.scss';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  configureStore from './store/store';


import firebase from './firebase/firebase';
import AppRouter, { history } from './router/AppRouter';
import HeartSpinner from './components/ui/HeartSpinner';
import { onAuthStatusSuccess, onAuthStatusFailed } from './actions/authActions';
import { BrowserRouter } from 'react-router-dom';



const {store , persistor } = configureStore();


const AppRoot = () => (
    <StrictMode>
      <Provider store={store}>
      <PersistGate loading={HeartSpinner()} persistor={persistor}>
        <BrowserRouter history={history}>
          <AppRouter/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    </StrictMode>
)




if(window.navigator.onLine) {

  render(<HeartSpinner/>, document.getElementById('root'));

  firebase.auth.onAuthStateChanged(user => {
   
    if(user){
      store.dispatch(onAuthStatusSuccess(user));
    }else {
      store.dispatch(onAuthStatusFailed('Failed to authenticate'))
    }
  });
  
    render(<AppRoot/>, document.getElementById('root'));
  
} else {
  render((
    <div>
      No internet Connection
    </div>
  ), document.getElementById('root'));
}




