import React from "react";

const NewSpotForm = () => {
    return (
        <div className="spot-form">
            <form className="new-spot-form">
                <input
                type="text"
                name="name"
                placeholder="Name your listing..."
                >
                </input>
            </form>
        </div>
    )
}

export default NewSpotForm;
