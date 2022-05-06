import { fakeAuthProvider } from '../auth';
import React, { useContext } from 'react';

interface AuthContextType {
    user: any;
    signin: (email: string, password: string, callback: VoidFunction) => void;
    signout: (email: string) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = React.useState<any>(null);

    const signin = (email: string, password: string, callback: VoidFunction) => {
      return fakeAuthProvider.signin(email, password, () => {
        setUser(email);
        callback();
      });
    };

    const signout = (email: string) => {
      return fakeAuthProvider.signout(user, () => {
        setUser(null);
      });
    };

    const value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);