

import axios from 'axios'
import './App.css'

function App() {
  // ${import.meta.env.VITE_BACKEND_URL}
  const triggerRequest = () => {
    axios(`${import.meta.env.VITE_BACKEND_URL}/api`)
      .then(response => {
        console.log(response)
      })
      .catch( e => {
        console.log(e)
      })
  }

  return (
    <>
      
      <h1>Netlify Functions</h1>

      <button onClick={triggerRequest}>Trigger API request</button>    
      
    </>
  )
}

export default App
