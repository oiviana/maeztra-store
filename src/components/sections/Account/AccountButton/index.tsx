// import { FaRegHeart } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";

export default function AccountButton() {
  return (
    <div>
      <button className="flex justify-center items-center  lg:w-[8.375rem] lg:h-[2.875rem] lg:gap-1">
        <IoPersonOutline className="text-3xl lg:text-base" />
        <span className="hidden lg:flex text-sm">Minha Conta</span>
      </button>
    </div>
  );
}
