import React from 'react';
import {useField} from 'formik';

export const CustomTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    
    return (
        <div className="form-control">
            <label>{label}</label>
            <input autoComplete="none" className="mb-2"  {...field} {...props} />
            {meta.touched && meta.error ? (
                <span className="errors">{meta.error}</span>
            ) : <span className="empty-holder"></span> }
        </div>
    )
}
