import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-red-500 p-5">
        <h1 className='text-white font-semibold'>hello world</h1>
      </div>
    </>
  )
}

export default App
