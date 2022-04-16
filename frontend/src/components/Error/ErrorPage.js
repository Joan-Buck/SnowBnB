import React, { useEffect, useState } from "react";
import './ErrorPage.css';

const ErrorPage = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true)
    }, [])

    if (!loaded) {
        return null;
    }

    return (
        <div className="error-main-container">
            <div className="error-sub-container">
                <h1 className="error-404">Sorry, the page you're looking for couldn't be found.</h1>
            </div>
        </div>
    )
}

export default ErrorPage;
