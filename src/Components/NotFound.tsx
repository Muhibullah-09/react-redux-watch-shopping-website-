import React from 'react';
import './Style.css';

function NotFound() {
    return (
        <div className="container">
            <h1 className="row justify-content-center notFound mt-5" >Page Not Found</h1>
            <p className="row justify-content-center text-secondary">Something went wrong : (</p>
        </div>
    );
}

export default NotFound;
