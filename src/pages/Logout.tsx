import React, { useEffect } from 'react'
import { useAuth } from "../context/AuthContext";

const LogoutPage: React.FC = () => {
    const { signout, email } = useAuth();

    useEffect(() => {
        if (email) {
            console.log('email set, calling signout');
            signout(email);
        } else {
            console.log('got to logout with no email');
        }
    },[signout, email]);

    return (
        <div>
            <p>You have been logged out</p>
        </div>
    );
}

export default LogoutPage;