import { useState } from 'react'
import './App.css'
import DynamicMainContentPage from './pages/mainContent'
import PostList from './pages/postList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <DynamicMainContentPage path='about.md' />
      </div>
      <PostList />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
