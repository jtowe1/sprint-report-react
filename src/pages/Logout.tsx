import React, { useEffect } from 'react'
import { useAuth } from "../context/AuthContext";

const LogoutPage: React.FC = () => {
    const {signout, user} = useAuth();

    useEffect(() => {
        signout(user);
    },[signout, user]);

    return (
        <div>
            <p>You have been logged out</p>
        </div>
    );
}

export default LogoutPage;