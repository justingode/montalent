/* index.css */
// @tailwind base;
// @tailwind components;
// @tailwind utilities;


import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {
     
     <div className='App'>
      <h1>
        Sur les épaules de mon talent
      </h1>

      <form action="/search">
      <input type="text" />
      </form>

      <button type='submit'>
        Submit it
      </button>

      <h1 className="text-center text-3xl font-bold underline">Hello World</h1>

     </div>

     

     
     /*  <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>

  )
}

export default App
