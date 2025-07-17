import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


window.ipcRenderer?.on('main-process-message', (_event, message) => {
  console.log('Message from main process:', message);
});