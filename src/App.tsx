import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/charts">Charts</Link>
            <Outlet />
        </>
    );
}

export default App;
