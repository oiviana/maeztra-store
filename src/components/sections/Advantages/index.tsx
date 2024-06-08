import AdvantageCard from "./AdvatageCard";
import { advantagesMock } from "./mock";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderSettings } from "./sliderSettings";

export default function Advantages() {
  const advantageCards = advantagesMock.map((item) => (
    <AdvantageCard
      title={item.title}
      subtitle={item.subtitle}
      icon={item.img}
    />
  ));

  return (
    <div className="overflow-hidden pl-2 flex flex-col gap-4 my-6">
      <h2 className="mx-auto text-base text-primary-gray font-bold">
        Por que comprar na Maeztra?
      </h2>
      <div className="hidden  w-full max-w-[100rem] mx-auto  2xl:flex">
        <div className="flex   gap-6">{advantageCards}</div>
      </div>
      <div>
        <Slider {...sliderSettings} className="flex 2xl:hidden">
          {advantageCards}
        </Slider>
      </div>
    </div>
  );
}