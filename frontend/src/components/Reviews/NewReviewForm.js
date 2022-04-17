import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createReviewThunk } from "../../store/reviews";
import './ReviewForm.css';
import './ReviewFormModal.css';

const NewReviewForm = ({spotId, closeModal}) => {
    const dispatch = useDispatch()

    const [content, setContent] = useState('');
    const [rating, setRating] = useState(1);
    const [validationErrors, setValidationErrors] = useState([]);

    const submitReviewForm = async(e) => {
        e.preventDefault();

        setValidationErrors([]);

        const newReview = {
            content,
            rating,
            spotId
        }

        const result = await dispatch(createReviewThunk(newReview))
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
                <div className={'review-form-title'}>Review Your Stay!</div>
            </div>
            <form className="review-form" onSubmit={submitReviewForm}>
            <ul className="form-errors">
                    {validationErrors.length > 0 && validationErrors.map((error, i) =>
                        <li key={i}>{error}</li>
                    )}
                </ul>
            <label
                    htmlFor="content"
                    className="review-form-texarea">
                        Review Your Stay
                    <textarea
                        name="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    >
                    </textarea>
                </label>
                <label
                    htmlFor="rating"
                    className="review-form-label"> Rate Your Stay
                     <select name='rating' onChange={(e) => setRating(e.target.value)} className='review-form-select'>
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
                <button type="submit" className="form-button">
                    Submit Review
                </button>
            </form>

        </div>
    )
}


export default NewReviewForm;
