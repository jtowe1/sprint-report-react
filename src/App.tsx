import React from 'react';
import './App.css';
import { SprintProvider } from './context/SprintContext';
import Charts from './pages/Charts';

const App: React.FC = () => {
    return (
        <SprintProvider>
            <Charts />
        </SprintProvider>
    );
}

export default App;
