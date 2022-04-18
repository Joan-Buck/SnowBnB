import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import NewSpotForm from './NewSpotForm';

function NewSpotFormModal() {
    const [showModal, setShowModal] = useState(false);
    // const [renderForm, setRenderForm] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className='modal-button'>Add New Listing</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <NewSpotForm closeModal={() => setShowModal(false)}/>
                </Modal>
            )}
        </>
    )
}


export default NewSpotFormModal;
