import axios from "axios";
import "./App.css";
import { useState } from "react";
import { Theme, Button, Input } from "react-daisyui";

function App() {
  const [city, setCity] = useState("Trieste");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(undefined);

  // VITE_BACKEND_URL --> Netlify env variable

  const triggerRequest = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api`)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log("CITY", city);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/get-city-weather`, { city })
      .then((response) => {
        setResult(response.data);
        setCity("");
        setError(undefined);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="App">
      <h1 color="secondary ">Netlify Functions</h1>
      <button onClick={triggerRequest}>Trigger API request</button>
      <hr></hr>
      <h1 color="secondary ">Post request</h1>
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
        <span className="label-text">Type your city...</span>
        <button type="submit">Submit</button>
      </form>
      {result && <h2>{result.name}</h2>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
