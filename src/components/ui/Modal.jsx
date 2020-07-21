import React from 'react';
import AppModal from 'react-modal';

const Modal = (props) => {

    const customStyle = {
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            zIndex: 9999,
            width: '50vw',
            height: '50vh'
        }
    }

    AppModal.setAppElement('#root');


    return (
        <AppModal
            isOpen={props.isOpen}
            onRequestClose={props.onRequestClose}
            style={customStyle}
            contentLabel="Modal"
            shouldCloseOnOverlayClick={true}
        >
            {props.children}
        </AppModal>
    )
}


export default Modal;
