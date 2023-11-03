import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AppRoutes } from './routes/AppRoutes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='font'>
     <AppRoutes/>
    </div>
  )
}

export default App
