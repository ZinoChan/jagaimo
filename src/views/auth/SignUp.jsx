import React from 'react'
import { HOME, SIGNIN } from '../../constants/routes';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { signUp } from '../../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import HeartSpinner from '../../components/ui/HeartSpinner';
import { CustomTextInput } from '../../helpers/CustomInput';
import { validateSignUp } from '../../helpers/ValidateForm';
import { displayActionMessage } from '../../helpers/utils';

const SignUp = () =>  {

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
                    <p className="switch-auth">You already have an account ? <Link to={SIGNIN}>Sign In</Link></p>
                </div>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: ''
                    }}

                    validationSchema={validateSignUp}

                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        dispatch(signUp(values));
                        resetForm();
                        setSubmitting(false);
                    }}

                    
                >
                    {props => (
                        <Form>
                            <h1>Sign Up</h1>
                            {authStatus ? !authStatus.success ?  displayActionMessage(authStatus.message,'error') : null: null}
                            <div className="inline-form-control d-flex">
                                <CustomTextInput label="FirstName" type="text" name="firstName" placeholder="First name" />
                                <CustomTextInput label="LastName" type="text" name="lastName" placeholder="Last name" />
                            </div>
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


export default SignUp;