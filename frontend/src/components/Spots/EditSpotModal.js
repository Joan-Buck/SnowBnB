import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditSpotForm from './EditSpotForm';

function EditSpotFormModal({ spot }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Update Listing</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSpotForm spot={spot} closeModal={() => setShowModal(false)}/>
                </Modal>
            )}
        </>
    )
}


export default EditSpotFormModal;
