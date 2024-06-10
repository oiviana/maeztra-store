import Accordion from "../../../ui/Accordion";
import { menuItemsMock } from "./mock";

export default function FooterMenu() {
  return (
    <>
      <div className="hidden lg:flex w-full max-w-[67rem] h-[18.125rem]  mx-auto justify-between py-11 px-1">
        {menuItemsMock.map((item) => (
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-primary-gray mb-1">
              {item.title}
            </h3>
            {item.menuItems.map((menuitem) => (
              <a href={menuitem.url} className="text-[0.75rem] text-black">
                {menuitem.title}
              </a>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:hidden">
        {menuItemsMock.map((item) => (
          <Accordion title={item.title} menuItems={item.menuItems} />
        ))}
      </div>
    </>
  );
}
