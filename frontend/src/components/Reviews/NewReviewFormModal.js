import React, { useState, useEffect } from 'react';
import { Modal } from '../../context/Modal';
import NewReviewForm from './NewReviewForm';

function NewReviewFormModal({spotId}) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <>
            <button onClick={() => setShowModal(true)}>Add Your Review</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false) }>
                    <NewReviewForm closeModal={() => setShowModal(false)} spotId={spotId}/>
                </Modal>
            )}
        </>
    )
}


export default NewReviewFormModal;
