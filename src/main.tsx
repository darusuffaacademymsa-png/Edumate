import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router';
import './index.css';
import './lib/firebase';
import { registerSW } from 'virtual:pwa-register';

registerSW({ immediate: true });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
