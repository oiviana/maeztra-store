export default function Newsletter() {
  return (
    <div className="w-full h-[7.5rem] bg-secondary-white border-y-2 border-tertiary-white">
      <div className="flex flex-col justify-center gap-4 items-center lg:flex-row lg:justify-between mx-auto w-full lg:max-w-[67rem] h-full px-1 xl:px-0">
        <h2 className="text-primary-gray font-bold text-2xl">
          Receba Nossa Newsletter
        </h2>
        <div className="relative flex justify-center gap-6 w-full max-w-[630px] h-[26px] md:h-10">
          <input type="text" placeholder="Digite seu e-mail" className="rounded w-full border-[1px] border-primary-gray md:w-[630px] px-4"/>
          <button className="bg-primary-yellow rounded flex h-full justify-center items-center text-sm font-bold w-20 md:w-[132px] text-primary-white md:absolute right-0">Enviar</button>
        </div>
      </div>
    </div>
  );
}
