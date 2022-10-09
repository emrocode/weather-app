import { useState } from "react";
import { Weather } from "./components";
import { Navigation } from "./components";

const APPID = import.meta.env.VITE_API_KEY;

export default function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");

  const searchLocation = async () => {
    if (location) {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${APPID}`
      )
        .then((res) => res.json())
        .then((json) => setData(json));
      return setLocation("");
    }
  };

  return (
    <>
      <Navigation
        location={location}
        setLocation={setLocation}
        searchLocation={searchLocation}
      />
      <div className="mx-auto w-[90%] max-w-[1440px]">
        <Weather data={data} />
      </div>
    </>
  );
}
