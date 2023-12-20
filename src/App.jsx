import { useState } from 'react'
import 'react-image-crop/dist/ReactCrop.css'
import Profile from './components/Profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div className="bg-gray-900 text-gray-400 min-h-screen p-4">
      <Profile />
    </div>
      
    </>
  )
}

export default App
