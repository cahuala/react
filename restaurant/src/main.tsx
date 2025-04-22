import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

// bootstrap
import 'bootstrap';

// css
import '@fortawesome/fontawesome-free/css/all.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './main.css'
import './scss/react.scss';
import 'bootstrap-social/bootstrap-social.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)
