import React from 'react';
import ReactDOM from 'react-dom/client';
import { SafeAreaProvider } from '@dotrly/sdk';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  </React.StrictMode>,
);