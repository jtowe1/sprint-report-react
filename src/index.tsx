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
import LogoutPage from './pages/Logout';

const rootElement = document.getElementById('root');
const ChartsWithProvider = () => (
    <SprintProvider>
        <Charts />
    </SprintProvider>
);

function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
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
                        <Route path="/logout" element={<LogoutPage />} />
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
