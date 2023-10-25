import { useState, useEffect } from "react";

const APPID = import.meta.env.VITE_API_KEY;

export default function useFetch(url, defaultLocation) {
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");

  async function searchLocation(e) {
    e.preventDefault(); // avoid page reload

    if (city)
      await fetch(`${url}?q=${city}&units=imperial&appid=${APPID}`)
        .then((res) => res.json())
        .then((json) => setData(json));
    return setCity("");
  }

  useEffect(() => {
    // set units "imperial" returns °F and "metric" returns °C
    fetch(`${url}?q=${city || defaultLocation}&units=imperial&appid=${APPID}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return { data, city, setCity, searchLocation };
}
