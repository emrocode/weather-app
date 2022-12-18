export default function Weather({ data }) {
  const wIcon = data.weather && data.weather[0].icon;
  const wDate = new Date().toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="mt-4 flex flex-col">
      {data.weather && (
        <div
          className="max-w-[480px] rounded-md bg-white p-4 shadow-sm"
          title={`Weather Today in ${data.name}`}
        >
          <section className="flex flex-col-reverse justify-start gap-2 sm:grid-cols-2 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-x-2">
              <img
                src={`https://openweathermap.org/img/wn/${wIcon}@2x.png`}
                className="h-16 w-16"
                alt={`Weather Today in ${data.name}`}
              />
              <p className="p-2 text-lg font-bold">{`${Math.trunc(
                data.main.temp
              )}°F`}</p>
            </div>
            <div className="items-left flex flex-col p-2 sm:items-end">
              <span className="text-sm">{wDate}</span>
              <h2 className="text-2xl font-bold">{`${data.name}, ${data.sys.country}`}</h2>
            </div>
          </section>
          <span className="my-4 block h-px w-full bg-gray-200" />
          <section className="flex flex-col gap-y-0.5 text-sm">
            <span className="font-semibold capitalize">{`feels like ${Math.trunc(
              data.main.feels_like
            )}°F. ${data.weather[0].main}. ${
              data.weather[0].description
            }`}</span>
            <ul className="flex justify-between">
              <li>{`Humidity: ${data.main.humidity}%`}</li>
              <li>{`Visibility: ${data.visibility / 1000}km`}</li>
            </ul>
            <ul className="flex justify-between">
              <li>{`Wind: ${Math.round(data.wind.speed)}mph`}</li>
              <li>{`Pressure: ${Math.round(data.main.pressure)}hPa`}</li>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}
