import React from 'react'
import CheckoutHeader from './CheckoutHeader'
import { Link } from 'react-router-dom'
import { CHECKOUT_STEP_3, CHECKOUT_STEP_1} from '../../constants/routes';
import withAuth from './hok/withAuth';
import { Formik, Form } from 'formik';
import { validateDetails } from '../../helpers/ValidateForm';
import {setUser } from '../../actions/authActions';
import {  CustomTextInput } from '../../helpers/CustomInput';
import HeartSpinner from '../../components/ui/HeartSpinner';



const Details = ({profile, dispatch, history, isAuthenticating}) =>  {
      
    const overlayVisibility = isAuthenticating ? 'visible' : 'hidden';

    return (
        <div className="details">
            <div className={`auth-overlay ${overlayVisibility}`}>
                <HeartSpinner/>
            </div>
            <CheckoutHeader current={2}/>
            <Formik
                    initialValues={{
                        firstName: profile.firstName || '',
                        lastName: profile.lastName || '',
                        email: profile.email || '',
                        address: profile.address || '',
                        mobile: profile.mobile || '',
                        postalCode: profile.postalCode || ''
                    }}

                    validationSchema={validateDetails}

                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        dispatch(setUser(values));
                        history.push(CHECKOUT_STEP_3);
                        setSubmitting(false);
                    }}
                    validateOnChange={true}
                >
                    {props => (
                        <Form>
                            <div className="inline-form-control d-flex">
                                <CustomTextInput label="FirstName" type="text" name="firstName" placeholder="First name" />
                                <CustomTextInput label="LastName" type="text" name="lastName" placeholder="Last name" />
                            </div>
                            <div className="inline-form-control d-flex">
                                <CustomTextInput label="Email" type="email" name="email" placeholder="Email" />
                                <CustomTextInput label="Phone Number" type="text" name="mobile" placeholder="+212 6 565 5543" />
                            </div>
                            <div className="inline-form-control d-flex">
                                <CustomTextInput label="Address" type="text" name="address" placeholder="address" />
                                <CustomTextInput label="Postal Code" type="number" name="postalCode" placeholder="PostalCode" />
                            </div>
                            <div className="checkout-btns">
                                <Link className="btn-light" to={CHECKOUT_STEP_1}>Back</Link>
                                <button
                                    className="btn-dark" 
                                    type="submit" 
                                >Continue</button>
                            </div>
                        </Form>
                    )} 
            </Formik>   
        </div>
    )
}


export default withAuth(Details);