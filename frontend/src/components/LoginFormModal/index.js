import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({className}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className={className} onClick={() => setShowModal(true)}>Log In </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm  />
                </Modal>
            )}
        </>
    )
}


export default LoginFormModal;
