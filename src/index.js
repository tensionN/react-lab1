import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ThemeProvider from './providers/ThemeProvider';
import './i18n';
import Loader from "./components/Loader/Loader";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader/>}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);

