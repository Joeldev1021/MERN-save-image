import { useState } from 'react'
import Header from './components/Header'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
            <div className="m-auto">
                <div className="text-6xl text-red-600">{count}</div>
                <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button" onClick={() => setCount((count) => count + 1)}>
                    count+
                </button>
            </div>
</>
  )
}

export default App
