// import { useState } from 'react'
import { Button } from '@/components/ui/button'
import './App.css'
import Header from './components/header.tsx'
import ChartBarLabel from './charts/ChartBarLabel.tsx'
import ChartPieLabel from './charts/ChartPieLabel.tsx'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <ChartBarLabel/>
      <Button variant="outline">Botão</Button>
      <ChartPieLabel/>
    </>
  )
}

export default App
