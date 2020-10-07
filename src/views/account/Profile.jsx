import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Modal from '../../components/ui/Modal';
import { useFormik} from 'formik';
import { validateDetails} from '../../helpers/ValidateForm';
import { updateProfile } from '../../actions/profileActions';
import HeartSpinner from '../../components/ui/HeartSpinner';



const Profile = () =>  {

    const dispatch = useDispatch();

    const [readOnly, setReadOnly] = useState(true);
    const [modalIsOpen, setOpenModal] = useState(false);

    const { profile, isLoading, authStatus } = useSelector(state => ({
        profile: state.profile,
        isLoading: state.app.loading,
        authStatus: state.app.authStatus
    }))

    const formik = useFormik({
        initialValues: {
            firstName: profile.firstName || '',
            lastName: profile.lastName || '',
            email: profile.email || '',
            password: '',
            address: profile.address || '',
            mobile: profile.mobile || '',
            postalCode: profile.postalCode || ''
        },
        validateDetails,
        onSubmit: values => {
            const updates = {
                firstName: values.firstName,
                lastName: values.lastName,
                address: values.address,
                mobile: values.mobile,
                postalCode: values.postalCode
            }
            const credentials = {
                email: values.email,
                password: values.password
            }
            dispatch(updateProfile({updates, credentials}));
        },
      });


    const handleEditClick = (e) => {
        e.preventDefault();
        if(readOnly){
            setReadOnly(!readOnly);
        }else if(!readOnly && formik.values.email !== profile.email){
            openModal();
        }else{
            formik.handleSubmit();
        }
            
            
    }
    

    const handlePasswordConfirm = e => {
        e.preventDefault();
        if(formik.values.password){
            formik.handleSubmit();
            closeModal();
        }
        
        
    }

    const openModal = () => setOpenModal(true);
    const closeModal = () => setOpenModal(false);

    const overlayVisibility = isLoading ? 'visible' : 'hidden';
    const profileName = profile.firstName ? profile.firstName.slice(0,1).toUpperCase() + profile.lastName.slice(0,1).toUpperCase() : null;
    
    return (
        <div className="profile position-relative">
             <div className={`auth-overlay ${overlayVisibility}`}>
                <HeartSpinner/>
            </div>
            <div className="profile-info">
                <div className="profile-img">
                    {profileName}
                </div>
                <span className="name">{`${profile.firstName} ${profile.lastName}`}</span>
            </div>
            <form onSubmit={handleEditClick}>
            <h2 className="fire-errors">{authStatus ? !authStatus.success ? authStatus.message : null: null}</h2>
                <div className="inline-form-control d-flex">
                    <div className="form-control mr-1">
                        <label>First Name</label>
                        <input 
                            type="text" 
                            name="firstName"
                            id="firstName"
                            placeholder={profile.firstName}
                            readOnly={readOnly}
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                        />
                    
                    </div>
                    <div className="form-control mr-1">
                        <label>Last Name</label>
                        <input 
                            type="text" 
                            name="lastName"
                            id="lastName"
                            placeholder={profile.lastName}
                            readOnly={readOnly}
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                <div className="inline-form-control d-flex">
                    <div className="form-control mr-1">
                        <label>Email</label>
                        <input 
                            type="text" 
                            name="email"
                            id="email"
                            placeholder={profile.email}
                            readOnly={readOnly}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </div>
                    
                    <div className="form-control mr-1">
                        <label>Phone Number</label>
                        <input 
                            type="phone" 
                            name="mobile"
                            id="mobile"
                            placeholder={profile.mobile}
                            readOnly={readOnly}
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                        />
                    
                    </div>
                </div>
                <div className="inline-form-control d-flex">
                    <div className="form-control mr-1">
                        <label>Address</label>
                        <input 
                            type="text" 
                            name="address"
                            id="address"
                            placeholder={profile.address}
                            readOnly={readOnly}
                            value={formik.values.address}
                            onChange={formik.handleChange}
                        />
                        
                    </div>
                    <div className="form-control mr-1">
                        <label>Postal Code</label>
                        <input 
                            type="text" 
                            name="postalCode"
                            id="postalCode"
                            readOnly={readOnly}
                            value={formik.values.postalCode}
                            onChange={formik.handleChange}
                        />
                        
                    </div>
                </div>
                <button 
                    className="main-btn"
                    onClick={handleEditClick}
                    type="submit"
                >
                    {readOnly ? 'Edit profile' : 'Save changes'}
                </button>
            </form>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <form className="modal-form" onSubmit={handlePasswordConfirm}>
                    <h3>Enter your password to confirm</h3>
                    <input 
                        type="password" 
                        name="password"
                        id="password"
                        value={formik.password}
                        onChange={formik.handleChange}
                    />
                    <button type="submit" className="btn-dark">Confirm Changes</button>
                </form>
                <div 
                    className="close-btn"
                    onClick={closeModal}
                >x</div>
            </Modal>
        </div>
    )
}



export default Profile;