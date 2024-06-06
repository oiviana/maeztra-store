import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function MiniCart(){
    return(
        <div>
            <button className="flex justify-center items-center  lg:w-[8.375rem] lg:h-[2.875rem] lg:border-[1px] border-primary-yellow rounded-lg lg:gap-1">
            <HiOutlineShoppingBag 
            className="text-3xl lg:text-base"/>
            <span className="hidden lg:flex text-sm">Meu Carrinho</span>
            </button>
        </div>
    )
}