import React from 'react';
import ReactDOM from 'react-dom/client';
import urls from "./urls.json";

function App() {
  React.useEffect(() => {
    const video = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = video;
  }, []);

  return null;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
