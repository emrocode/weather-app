import { useState, useEffect } from "react";
import { Navigation } from "./components";
import { Weather } from "./components";

const APPID = import.meta.env.VITE_API_KEY;

export default function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");

  // set units "imperial" returns °F and "metric" returns °C
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APPID}`;

  const searchLocation = async (e) => {
    e.preventDefault(); // avoid page reload

    if (city)
      await fetch(URL)
        .then((res) => res.json())
        .then((json) => setData(json));
    return setCity("");
  };

  useEffect(() => {
    (async function defaultLocation() {
      const city = "Asuncion,py";
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APPID}`
      )
        .then((res) => res.json())
        .then((json) => setData(json));
    })();
  }, []);

  return (
    <>
      <Navigation
        city={city}
        setCity={setCity}
        searchLocation={searchLocation}
      />
      <section className="mx-auto w-[90%] max-w-[1440px]">
        <Weather data={data} />
      </section>
    </>
  );
}
