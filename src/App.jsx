import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("berlin");
  const [result, setResult] = useState(null)
  const [error, setError] = useState(undefined)
  // ${import.meta.env.VITE_BACKEND_URL}

  // const triggerRequest = () => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/api`)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  const handleForm = (e) => {
    e.preventDefault();
    console.log("CITY", city);
    axios
    .post(`${import.meta.env.VITE_BACKEND_URL}/get-city-weather`, {city})
    .then((response) => {
      console.log(response);
      setResult(response.data)
    })
    .catch((err) => {
      console.log(err.message);
      setError(err.message)
    });
  };

  return (
    <>
      <h1>Netlify Functions</h1>

      {/* <button onClick={triggerRequest}>Trigger API request</button> */}

      <form onSubmit={handleForm}>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value.toLowerCase());
          }}
          autoFocus
        />
        <button type="submit">Submit</button>
      </form>
      {result && <h2>{result.city}</h2>}
      {error && <p>{error}</p>}
    </>
  );
}

export default App;
