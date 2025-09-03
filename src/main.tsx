import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ChartBarLabel from './charts/barChartLabel.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ChartBarLabel/>
  </StrictMode>,
)
