import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { StarSplash } from './components/StarSplash.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <>
    <App />
    <StarSplash />
  </>
);

// Only register in production builds so the dev server's HMR isn't served stale from cache.
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch((err) => {
      console.error('Service worker registration failed:', err);
    });
  });
}
