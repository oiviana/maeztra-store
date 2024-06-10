import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";

export default function OfferModal() {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed w-full h-[100vh] z-[99] ${
        showModal ? "block" : "hidden"
      }`}
      style={{ background: "rgba(0, 0, 0, 0.7)" }}
    >
      <div className="mx-auto mt-[4rem] w-[80%] opacity-1 lg:max-w-[53.25rem] ">
        <div className="w-full flex justify-end bg-transparent h-[1.375rem]">
          <button
            className="uppercase text-primary-white text-[0.75rem]"
            onClick={() => setShowModal(false)}
          >
            fechar
          </button>
        </div>
        <div className="flex">
          <div className="hidden lg:flex">
            <img src={`${import.meta.env.BASE_URL}/images/modal/bg-modal.png`} alt="" />
          </div>
          <div className="bg-primary-white flex flex-1 h-[19.188rem] lg:h-[33.125rem] flex-col justify-center items-center gap-5 px-4 lg:px-0">
            <CiMail size={30} className="text-[#231F20]" />
            <span className="uppercase text-[0.75rem] text-[#464B54]">Bem vindo à maeztra</span>
            <p className="text-center text-[#787D83]">
              Receba em Primeira mão <br/><b>desconto e ofertas exclusivas</b>
            </p>
            <fieldset className="flex flex-col w-full max-w-[20.125rem] gap-3">
                <input type="email" name="" id="" placeholder="Digite seu e-mail" className="border-[1px] border-[#C4C4C4] rounded-xl h-10 px-4"/>
                <button className="bg-primary-yellow h-10 uppercase font-bold text-[0.75rem] text-primary-white rounded-xl">
                    Enviar
                </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}
