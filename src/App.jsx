import { useState } from 'react'
import './App.css'

import { Header, About, Creation, Footer } from "./sections";

function App() {
  const [count, setCount] = useState(0);
  const stateVar = `<button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>`;

  return (
    <>
      <Header />
      <main className='mx-auto  md:w-[75%]'>
        <About />
        <Creation />
      </main>

      <Footer />
    </>
  )
}

export default App
