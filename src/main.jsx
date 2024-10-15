// node modules
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Components
import App from './App.jsx';
import 'lenis/dist/lenis.css';


// CSS links
import './index.css';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
