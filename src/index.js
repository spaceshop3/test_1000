import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { HashRouter } from 'react-router-dom';
import './index.css'; // или './App.css', если ты туда вставил Tailwind


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Router />
  </HashRouter>
);
