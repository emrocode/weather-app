import { Navigation } from "./components";
import { Weather } from "./components";
import { useFetch } from "./hooks";

export default function App() {
  // pass a URL and default location
  const weather = useFetch(
    "https://api.openweathermap.org/data/2.5/weather",
    "asuncion,py"
  );

  return (
    <>
      <Navigation
        city={weather.city}
        setCity={weather.setCity}
        searchLocation={weather.searchLocation}
      />
      <section className="mx-auto w-[90%] max-w-[1440px]">
        <Weather data={weather.data} />
      </section>
    </>
  );
}
