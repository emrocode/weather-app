export default function Navigation({ city, setCity, searchLocation }) {
  return (
    <header className="sticky top-0 bg-[#EB6E4B] shadow-sm">
      <div className="bg-neutral-800">
        <div className="mx-auto flex h-12 w-[90%] max-w-[1440px] items-center justify-end">
          <a
            className="rounded-full bg-neutral-700 px-4 py-2 text-sm capitalize text-white outline-none"
            href="https://openweathermap.org/api"
            target="_blank"
            rel="noopener noreferrer"
          >
            open weather map
          </a>
        </div>
      </div>
      <nav className="mx-auto flex h-20 w-[90%] max-w-[1440px] items-center">
        <form
          onSubmit={searchLocation}
          className="flex w-full max-w-[360px] overflow-hidden rounded-full shadow-sm"
        >
          <input
            type="text"
            value={city}
            autoFocus={true}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search City"
            className="w-full py-2 px-4 text-neutral-800 outline-none"
          />
          <button
            type="submit"
            title="Search"
            className="border-l border-gray-200 bg-white py-2 px-4 outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
      </nav>
    </header>
  );
}
