import { clientSignin, clientSignout } from '../auth';
import React, { useContext, useState } from 'react';

interface AuthContextType {
    email: string|null;
    error: string|null;
    signin: (email: string, password: string, callback: VoidFunction) => void;
    signout: (email: string) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [ email, setEmail ] = React.useState<string|null>(null);
    const [ error, setError ] = useState<string|null>(null);

    const signin = (email: string, password: string, callback: VoidFunction) => {
        clientSignin(email, password)
        .then(() => {
            setEmail(email);
            setError(null);
            callback();
        }).catch((error: any) => {
            setError(error.response.data.message);
        })
    };

    const signout = (email: string) => {
        clientSignout(email)
        .then(() => {
            setEmail(null);
            setError(null);
        })
    };

    const value = { email, error, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
