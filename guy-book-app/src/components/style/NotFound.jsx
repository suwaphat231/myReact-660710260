import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate("/");
    };

    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFound;