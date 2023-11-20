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
      <Theme dataTheme="cupcake" className="whatever">
        <h1 color="secondary ">Netlify Functions</h1>
        <p color="primary">default Amsterdam</p>
        <Button color="primary" onClick={triggerRequest}>
          Trigger API request
        </Button>

        <form onSubmit={handleForm}>
          {/* <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value.toLowerCase());
          }}
          autoFocus
        /> */}
          <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
            <div className="form-control w-full max-w-xs">
              <label className="label secondary">
                <span className="label-text">Type your city...</span>
              </label>
              <Input
                className="w-full max-w-xs secondary bordered borderOffset md mb-4 secondary"
                bordered="true"
                borderOffset="true"
                color="secondary"
                placeholder="Type here"
                type="text"
                name="city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value.toLowerCase());
                }}
                autoFocus
              />
              <Button color="secondary" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </form>
        {result && <h2>{result.name}</h2>}
        {error && <p>{error}</p>}
      </Theme>
    </div>
  );
}

export default App;
