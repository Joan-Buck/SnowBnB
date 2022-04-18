import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editReviewThunk } from '../../store/reviews';
import './ReviewForm.css';
import './ReviewFormModal.css';

const EditReviewForm = ({ review, closeModal}) => {
    const dispatch = useDispatch()

    const { id } = review
    const [content, setContent] = useState(review.content);
    const [rating, setRating] = useState(review.rating);
    const [userId, setUserId] = useState(review.userId);
    const [spotId, setSpotId] = useState(review.spotId);
    const [validationErrors, setValidationErrors] = useState([]);


    const submitEditReviewForm = async (e) => {
        e.preventDefault();

        const editedReview = {
            id,
            content,
            rating,
            spotId,
            userId
        }
        const result = await dispatch(editReviewThunk(editedReview))
            .catch(async(res) => {
                const data = await res.json();
                if (data && data.errors) setValidationErrors(data.errors)
            })
            if (result) {
                closeModal()
            }
        }


return (
    <div className="review-form-container">
        <div className={'review-form-title-container'}>
                <div className={'review-form-title'}>Update Your Review!</div>
            </div>
        <form className="review-form" onSubmit={submitEditReviewForm}>
        <ul className="form-errors">
                    {validationErrors.length > 0 && validationErrors.map((error, i) =>
                        <li key={i}>{error}</li>
                    )}
                </ul>
            <label
                htmlFor="content"
                className="review-form-label">
                Review Your Stay
                <textarea
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="review-form-texarea"
                >
                </textarea>
            </label>
            <label
                htmlFor="rating"
                className="review-form-label"> Rate Your Stay
                <select name='rating' onChange={(e) => setRating(e.target.value)} value={rating} className='review-form-select'>
                    <option value=''>
                        Please add a rating...
                    </option>
                    <option value='1'>
                        1
                    </option>
                    <option value='2'>
                        2
                    </option>
                    <option value='3'>
                        3
                    </option>
                    <option value='4'>
                        4
                    </option>
                    <option value='5'>
                        5
                    </option>
                </select>
            </label>
            <button type="submit" className="review-form-button">
                Submit Review
            </button>
        </form>

    </div>
)
}

export default EditReviewForm;
