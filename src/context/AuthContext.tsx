import { fakeAuthProvider } from '../auth';
import React, { useContext } from 'react';

interface AuthContextType {
    email: string|null;
    signin: (email: string, password: string, callback: VoidFunction) => void;
    signout: (email: string) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [email, setEmail] = React.useState<string|null>(null);

    const signin = (email: string, password: string, callback: VoidFunction) => {
      return fakeAuthProvider.signin(email, password, () => {
        setEmail(email);
        callback();
      });
    };

    const signout = (email: string) => {
        return fakeAuthProvider.signout(email, () => {
            setEmail(null);
        });
    };

    const value = { email, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);