import { useState } from 'react'
import BootScreen from './components/BootScreen'

function App() {
  const [isBooting, setIsBooting] = useState(true)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {isBooting && <BootScreen onComplete={() => setIsBooting(false)} />}
      
      {!isBooting && (
        <main className="p-8">
          <h1 className="text-4xl font-bold">Portfolio</h1>
        </main>
      )}
    </div>
  )
}

export default App
