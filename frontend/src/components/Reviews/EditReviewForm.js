import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {editReviewThunk} from '../../store/reviews';

const EditReviewForm = ({ review }) => {
    const dispatch = useDispatch()

    const { id } = review
    const [content, setContent] = useState(review.content);
    const [rating, setRating] = useState(review.rating);
    const [userId, setUserId] = useState(review.userId);
    const [spotId, setSpotId] = useState(review.spotId)


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
    }


    return (
        <div className="review-form">
            <form className="new-review-form" onSubmit={submitEditReviewForm}>
                <label
                    htmlFor="content">
                    Review Your Stay
                    <input
                        type="textarea"
                        name="content"
                        placeholder="Please write your review here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    >
                    </input>
                </label>
                <label
                    htmlFor="rating"> Rate Your Stay
                    <select name='rating' required>
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
                <button type="submit" >
                    Submit Review
                </button>
            </form>

        </div>
    )
}

export default EditReviewForm;
