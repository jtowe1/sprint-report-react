import { authProvider } from '../auth';
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
      return authProvider.signin(email, password, () => {
        setEmail(email);
        callback();
      });
    };

    const signout = (email: string) => {
        return authProvider.signout(email, () => {
            setEmail(null);
        });
    };

    const value = { email, error, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);