
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './style/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './ErrorBoundary';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <Router>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Router>

);

reportWebVitals();

