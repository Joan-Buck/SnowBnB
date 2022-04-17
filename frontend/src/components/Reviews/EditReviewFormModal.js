import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from './EditReviewForm';


function EditReviewFormModal({ review }) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <>
            <button onClick={() => setShowModal(true)} className='modal-button'>Edit Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditReviewForm review={review} closeModal={() => setShowModal(false)}/>
                </Modal>
            )}
        </>
    )
}


export default EditReviewFormModal;
