import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

const App: React.FC = () => {
    return (
        <>
            <Nav />
            <Outlet />
        </>
    );
}

export default App;
