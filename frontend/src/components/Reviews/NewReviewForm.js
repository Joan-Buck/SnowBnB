import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReviewThunk } from "../../store/reviews";


const NewReviewForm = ({hideForm, spotId}) => {
    const dispatch = useDispatch()

    const [content, setContent] = useState('');
    const [rating, setRating] = useState(1);

    const submitReviewForm = async(e) => {
        e.preventDefault();

        const newReview = {
            content,
            rating,
            spotId
        }

        const result = await dispatch(createReviewThunk(newReview))

        if (result) {
            hideForm()
        }
    }

    return (
        <div className="review-form">
            <form className="new-review-form" onSubmit={submitReviewForm}>
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
                     <select name='rating' required onChange={(e) => setRating(e.target.value)}>
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


export default NewReviewForm;
