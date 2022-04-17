import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReviewThunk } from "../../store/reviews";
import EditReviewForm from "./EditReviewForm";
import EditReviewFormModal from "./EditReviewFormModal";
import './ReviewCard.css';

const ReviewCard = ({ review, editable }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [userOwns, setUserOwns] = useState(false);
    const [renderForm, setRenderForm] = useState(false);

    const { id, content, rating, spotId, userId } = review;

    useEffect(() => {
        if (sessionUser?.id === userId) {
            setUserOwns(true)
        }
    }, [sessionUser]);

    const showForm = (e) => {
        e.preventDefault();
        setRenderForm(true);
    }


    return (
        <div className="review-card-div">
             <div className="review-details"> {review.User.username} <Rating rating={review.rating} /></div>
            <div className="review-content">{review.content}</div>
            {userOwns && (<div>
                <div className="review-buttons">
                    <EditReviewFormModal review={review}/>
                    <button className="delete-review-button" onClick={() => dispatch(deleteReviewThunk(review.id))}>Delete Review</button>
                </div>
            </div>)}
        </div>
    )

}

const Rating = ({ rating }) => {
    const icons = []
    for (let i = 0; i < rating; i++) {
        icons.push(<div key={i}><i className={'fa-solid fa-star'}></i></div>)
    }

    //  TO DO: add in empty icons
    // for (let i = rating; i < 5; i++) {
    //     icons.push(<div key={i}>-</div>)
    // }

    return (
        <div className={'review-card-rating'}>{icons}</div>
    )
}

export default ReviewCard
