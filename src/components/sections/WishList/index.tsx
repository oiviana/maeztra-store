import { FaRegHeart } from "react-icons/fa6";


export default function WishListButton() {
  return (
    <div>
      <button className="flex justify-center items-center  lg:w-[8.375rem] lg:h-[2.875rem] lg:gap-1">
        <FaRegHeart className="text-3xl lg:text-base" />
        <span className="hidden lg:flex text-sm">Lista de Desejos</span>
      </button>
    </div>
  );
}
