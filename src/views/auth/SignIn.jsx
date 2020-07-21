import React from 'react'
import { HOME, SIGNUP } from '../../constants/routes';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { signIn } from '../../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import HeartSpinner from '../../components/ui/HeartSpinner';
import { CustomTextInput } from '../../helpers/CustomInput';
import { validateSignIn } from '../../helpers/ValidateForm';


const SignIn = () =>  {
   
  const dispatch = useDispatch();

  const { isAuthenticating, authStatus } = useSelector(state => ({ 
    isAuthenticating: state.app.isAuthenticating,
    authStatus: state.app.authStatus
  }));


  const overlayVisibility = isAuthenticating ? 'visible' : 'hidden';
    
  return (
        <div className="auth-wrapper sign-in">
            <div className={`auth-overlay ${overlayVisibility}`}>
                <HeartSpinner/>
            </div>
            <div className="auth-img"></div>
            <div className="auth-content">
                <div className="auth-header">
                    <Link to={HOME}>Home</Link>
                    <p>You don't have an account ? <Link to={SIGNUP}>Sign Up</Link></p>
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}

                    validationSchema={validateSignIn}

                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        dispatch(signIn(values.email, values.password));
                        resetForm();
                        setSubmitting(false);
                    }}
                >
                    {props => (
                        <Form>
                            <h2 className="fire-errors">{authStatus ? !authStatus.success ? authStatus.message : '': ''}</h2>
                            <CustomTextInput label="Email" type="email" name="email" placeholder="Email" />
                            <CustomTextInput label="Password" type="password" name="password" placeholder="Password" />
                            <button className="auth-btn" type="submit">Sign Up</button>
                        </Form>
                    )}
                    
                </Formik>
            </div>
        </div>
    )
}


export default SignIn;