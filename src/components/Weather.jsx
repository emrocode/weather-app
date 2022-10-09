export default function Weather({ data }) {
  const wIcon = data.weather && data.weather[0].icon;

  return (
    <div className="my-4 flex flex-col" title={`Weather Today in ${data.name}`}>
      {data.weather && (
        <div className="w-full max-w-[480px] rounded-md bg-white p-4 shadow-sm">
          <section className="flex w-full flex-col justify-between sm:flex-row sm:items-center">
            <div className="flex items-center">
              <img
                src={`http://openweathermap.org/img/wn/${wIcon}@2x.png`}
                className="h-16 w-16"
                alt={`Weather Today in ${data.name}`}
              />
              <p className="flex h-16 w-16 items-center justify-center text-2xl font-bold">{`${Math.round(
                data.main.temp
              )}°F`}</p>
            </div>
            <div className="flex h-16 flex-col justify-center px-4">
              <h2 className="text-2xl font-bold">{data.name}</h2>
              <p>{data.weather[0].main}</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
