import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // if you have any CSS file to import

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
