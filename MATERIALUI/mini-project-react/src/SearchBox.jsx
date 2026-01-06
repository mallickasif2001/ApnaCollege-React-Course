import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  // city input state
  let [city, setCity] = useState("");

  // error message state
  let [error, setError] = useState("");

  // OpenWeatherMap API URL
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  // API Key
  const API_KEY = "9beac45f38b6dd28891cf8320bafc9c9";

  // function to fetch weather info
  let getWeatherInfo = async () => {
    // 🔹 har new search pe error clear
    setError("");

    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    let jsonResponse = await response.json();
    console.log(jsonResponse);

    // ❗ IMPORTANT: API error handling
    if (!response.ok) {
      setError("City not found");
      return null;
    }

    // build result object only if API is successful
    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };

    return result;
  };

  // update city state on input change
  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  // form submit handler
  let handleSubmit = async (evt) => {
    evt.preventDefault();

    let newInfo = await getWeatherInfo();

    // update parent state only if valid data
    if (newInfo) {
      updateInfo(newInfo);
      setCity(""); // clear input after success
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />

        <br /><br />

        <Button variant="contained" type="submit">
          Search
        </Button>

        {/* show error only when it exists */}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}
