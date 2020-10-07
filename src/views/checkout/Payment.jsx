import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutHeader from './CheckoutHeader';
import { CHECKOUT_STEP_2 } from '../../constants/routes';
import withAuth from './hok/withAuth';
import { Formik, Form } from 'formik';

import { validatePayment } from '../../helpers/ValidateForm';
import { displayActionMessage } from '../../helpers/utils';
import { CustomTextInput } from '../../helpers/CustomInput';



const Payment = ({ history}) => {


    return (
        <div className="payment">
            
            <CheckoutHeader current={3}/>
            <div className="credit-card">
                <div className="credit-card-header">
                    <div className="card-info">
                        <h3>Credit Card</h3>
                        <p>
                            Safe money transfer using your bank account. <br/>
                            Visa, maestro, discover, american express.
                        </p>
                    </div>
                    <div className="card-img"></div>
                </div>
                <Formik
                    initialValues={{
                        cardNumber: '',
                        cvvCode: '',
                        date: '',
                        cardName: ''
                    }}

                    validationSchema={validatePayment}

                    validateOnBlur={true}
                    validateOnChange={true}

                    onSubmit={() => {
                        
                        displayActionMessage('Payment Confirmed Successfully ', 'success');
                        history.push('/');
                    }}
                    
                >
                    {props => (
                        <Form>
                            <CustomTextInput  label="Credit Card Number" type="text" name="cardNumber" placeholder="Enter Card Number" />
                            <div className="inline-form-control d-flex">
                                <CustomTextInput label="CVV Code" type="text" name="cvvCode" placeholder="Enter Cvv code" />
                                <CustomTextInput label="Expirity Date" type="date" name="date" placeholder="Enter Card expirity date " />
                            </div>
                            <CustomTextInput label="Card Name" type="text" name="cardName" placeholder="Enter Card Name" />
                            <div className="checkout-btns">
                                <Link className="btn-light" to={CHECKOUT_STEP_2}>Back</Link>
                                <button 
                                    className="btn-dark"
                                    type="submit"
                                >Confirm</button>
                            </div>
                        </Form>
                    )} 
            </Formik>  
            </div>   
        </div>
        
    )
}


export default withAuth(Payment);