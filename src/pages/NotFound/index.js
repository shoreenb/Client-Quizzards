import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const NotFound = () => {
    const location = useLocation();
    return (
        <>
        <h1>Sorry, {location.pathname} does not exist</h1>
        <h2><Link to="/">Back to main page</Link></h2>
        </>
        
    );
}

export default NotFound;
