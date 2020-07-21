import * as Yup from 'yup'; 

export const validateSignIn = Yup.object({
  email: Yup.string()
      .email('Invalid Email Address')
      .required('Required'),
  password: Yup.string()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, "must be between 6 and 20 characters and contains 1 digit 1 lower and 1 uppercase letter")
      .required('Required')
});

export const validateSignUp = Yup.object({
  firstName: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(7, 'Must be less than 8 characters')
      .required('Required'),
  lastName: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(7, 'Must be less than 8 characters')
      .required('Required'),
  email: Yup.string()
      .email('Invalid Email Address')
      .required('Required'),
  password: Yup.string()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, "must be between 6 and 20 characters and contains 1 digit 1 lower and 1 uppercase letter")
      .required('Required')
});

export const validateDetails = Yup.object({
  firstName: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(7, 'Must be less than 8 characters')
      .required('Required'),
  lastName: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(7, 'Must be less than 8 characters')
      .required('Required'),
  email: Yup.string()
      .email('Invalid Email Address')
      .required('Required'),
  address: Yup.string()
    .min(5, 'Must contain city, street name and building number')
    .required('Required'),
  mobile: Yup.string()
    .min(10, 'Must be at least 10 digit')
    .max(15, 'Must be less then 15 digit'),
  postalCode: Yup.string()
  .min(5, 'Must be at least 5 characters')
  .max(16, 'Must be less than 16 characters')
});


export const validatePayment = Yup.object({
  cardNumber: Yup.string()
    .min(13, "Credit Card Number can't be less then 13")
    .required("Required"),
  cvvCode: Yup.string()
    .min(3, 'Cvv Code must be 3 for Mastercard or Visa and 4 for Express')
    .max(4, 'Cvv Code must be 3 for Mastercard or Visa and 4 for Express')
    .required("Required"),
  date: Yup.date()
      .min(new Date(), `Date must be later then ${new Date()}`)
      .required('Required'),
  cardName: Yup.string()
  .min(3, 'Must be at least 3 characters')
  .required("Required")
})
