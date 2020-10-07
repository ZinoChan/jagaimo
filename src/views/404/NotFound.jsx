import React from 'react'
import { Link } from 'react-router-dom';
import { HOME } from '../../constants/routes';

export default function NotFound() {
    return (
        <div className="not-found">
            <div className="_404-img"></div>
            <p>OOps the page you looking for doesn't exist</p>
            <Link className="main-btn" to={HOME}>Home Page</Link>
        </div>
    )
}
