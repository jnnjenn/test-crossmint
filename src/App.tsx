// Import dependencies
import { useState } from 'react'

import ViewHome from './pages/ViewHome/ViewHome';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <ViewHome/>
    </div>
  )
}

export default App
