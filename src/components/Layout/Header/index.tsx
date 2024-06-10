import AccountButton from "../../sections/Account/AccountButton";
import DesktopMenu from "../../sections/Menu/DesktopMenu";
import MobileMenu from "../../sections/Menu/MobileMenu";
import MiniCart from "../../sections/MiniCart";
import Search from "../../sections/Search";

import WishListButton from "../../sections/WishList";

export default function Header() {
  return (
    <header className="sticky z-50 w-full bg-primary-white lg:relative">
      <div className="flex flex-col lg:hidden relative">
        <div className="flex h-[5.5rem] w-full items-center justify-between px-4 shadow-lg">
          <div className="flex items-center gap-4">
            <MobileMenu />
            <div className="w-[6.875rem] ">
              <img src={`${import.meta.env.BASE_URL}/images/icons/logo-maeztra.svg`} alt="Logo"/>
            </div>
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
            <div className="w-[9.188rem] ">
              <img src={`${import.meta.env.BASE_URL}/images/icons/logo-maeztra.svg`} alt="Logo"/>
            </div>
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
