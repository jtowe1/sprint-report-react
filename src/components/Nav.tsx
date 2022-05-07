import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Nav: React.FC = () => {
    const { email } = useAuth()
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/charts">Charts</Link>
            {email
                ? <Link to="/logout">Logout</Link>
                : <Link to="/login">Login</Link>
            }

        </>
    )
}

export default Nav;
