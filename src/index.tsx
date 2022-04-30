import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Charts from './pages/Charts';
import { SprintProvider } from './context/SprintContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginPage from './pages/Login';

const rootElement = document.getElementById('root');
const ChartsWithProvider = () => (
    <SprintProvider>
        <Charts />
    </SprintProvider>
);

function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useAuth();
    const location = useLocation();
    console.log(auth);

    if (!auth.user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

render(
    <AuthProvider>
        <BrowserRouter>
            <React.StrictMode>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route
                        path="/charts"
                        element={
                            <RequireAuth>
                                <ChartsWithProvider />
                            </RequireAuth>
                        }
                        />
                    </Route>
                </Routes>
            </React.StrictMode>
        </BrowserRouter>
    </AuthProvider>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
