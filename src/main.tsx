import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ChartBarLabel from './charts/ChartBarLabel.tsx'
import ChartPieLabel from './charts/ChartPieLabel.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <ChartBarLabel/>
    <ChartPieLabel/>
  </StrictMode>,
)
