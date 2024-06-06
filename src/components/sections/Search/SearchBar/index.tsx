



export default function SearchBar() {
  

  return (
    <div
      className={`h-16 flex items-center px-4 lg:px-1 lg:flex w-full lg:max-w-[49.438rem]`}
    >
      <div className="flex w-full justify-center gap-2">
        <div className="w-full h-10 relative flex">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="O que você busca?"
            className="w-full rounded-lg px-5 bg-tertiary-white placeholder-primary-gray text-xs"
          />
          <button className=" bg-primary-yellow text-primary-white w-[7.438rem] h-10 flex justify-center items-center rounded-lg absolute right-0 text-sm">
            {" "}
            Buscar
          </button>
        </div>

      </div>
    </div>
  );
}
