import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AppRoutes/>
    </>
  )
}

export default App
