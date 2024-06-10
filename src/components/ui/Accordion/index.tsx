import { useState } from "react";

interface MenuItemsProps {
  title: string;
  url: string;
}

export default function Accordion({
  title,
  menuItems,
}: {
  title: string;
  menuItems?: MenuItemsProps[];
}) {
  const [openAccordion, setOpenAccordion] = useState<boolean>(false);

  return (
    <div>
      <button
        className="flex w-full h-full justify-between items-center text-primary-gray font-bold py-2 px-10"
        onClick={() => setOpenAccordion(!openAccordion)}
      >
        <span>{title}</span>
        <svg
          className="fill-primary-gray font-bold"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="18"
            height="3"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              openAccordion && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              openAccordion && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`flex overflow-hidden transition-all duration-200 ease-in-out
                ${openAccordion ? "h-fit opacity-100" : "h-0 opacity-0"}`}
      >
        <div className="overflow-hidden flex flex-col px-10 gap-2 mb-2">
          {menuItems?.map((menuItem) => (
            <a href={menuItem.url}>{menuItem.title}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
