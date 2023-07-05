import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SidebarProvider } from './context/sidebar_context';
import { AnimalsProvider } from './context/animals_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AnimalsProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </AnimalsProvider>
);
