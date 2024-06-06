import LogoHeader from "../../icons/LogoHeader";
import AccountButton from "../Account/AccountButton";
import DesktopMenu from "../Menu/DesktopMenu";
import MobileMenu from "../Menu/MobileMenu";
import MiniCart from "../MiniCart";
import Search from "../Search";

import WishListButton from "../WishList";

export default function Header() {
  return (
    <header>
      <div className="flex flex-col lg:hidden relative">
        <div className="flex h-[5.5rem] w-full items-center justify-between px-4 shadow-lg">
          <div className="flex items-center gap-4">
            <MobileMenu />
            <LogoHeader width={110} height={12} />
          </div>
          <div className="flex items-center gap-10">
            <MiniCart />
          </div>
        </div>
        <Search />
      </div>

      <div className="hidden lg:flex flex-col">
        <div className=" h-[5.5rem] w-full shadow px-2 flex items-center">
          <div className="w-full max-w-[100rem]  mx-auto flex justify-between items-center">
            <div className="w-[147px] ">Logo</div>
            <Search />
            <div className="flex">
              <WishListButton />
              <AccountButton />
              <MiniCart />
            </div>
          </div>
        </div>
        <DesktopMenu />
      </div>
    </header>
  );
}
