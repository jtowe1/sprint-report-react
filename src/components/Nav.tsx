import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/charts">Charts</Link>
            <Link to="/logout">Logout</Link>
        </>
    )
}

export default Nav;
