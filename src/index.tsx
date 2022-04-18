import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Charts from './pages/Charts';
import { SprintProvider } from './context/SprintContext';

const rootElement = document.getElementById('root');
const ChartsWithProvider = (
    <SprintProvider>
        <Charts />
    </SprintProvider>
);

render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/charts" element={ChartsWithProvider} />
                </Route>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
