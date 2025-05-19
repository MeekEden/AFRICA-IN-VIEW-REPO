import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Check if we're running from file:// protocol
const isFileProtocol = window.location.protocol === 'file:';

// Display a console message for debugging
if (isFileProtocol) {
  console.log('Running from file:// protocol - using HashRouter for compatibility');
}

try {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </StrictMode>
    );
  } else {
    console.error('Root element not found');
  }
} catch (error) {
  console.error('Error rendering React application:', error);

  // If there's an error and we're using file:// protocol, show a message
  if (isFileProtocol) {
    const errorMessage = document.createElement('div');
    errorMessage.style.color = 'red';
    errorMessage.style.padding = '20px';
    errorMessage.style.maxWidth = '800px';
    errorMessage.style.margin = '0 auto';
    errorMessage.innerHTML = `
      <h2>Error Loading Application</h2>
      <p>There was an error loading the React application directly from the file system.</p>
      <p>This is likely due to browser security restrictions when loading JavaScript modules from file://</p>
      <p>Please use a local web server to view this application.</p>
    `;
    document.body.appendChild(errorMessage);
  }
}