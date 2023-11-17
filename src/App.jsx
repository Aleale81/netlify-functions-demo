

const axios = require('axios')
import './App.css'

function App() {
  // ${import.meta.env.VITE_BACKEND_URL}
  const triggerRequest = () => {
    axios.get(`https://astounding-daffodil-018ce9.netlify.app/.netlify/functions/api`)
      .then(response => {
        console.log(response.json())
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
