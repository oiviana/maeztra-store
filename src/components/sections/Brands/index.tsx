import BrandCard from "./BrandCard";
import { brandsMock } from "./mock";
import Slider from "react-slick";
import { sliderSettings } from "../Advantages/sliderSettings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Brands() {
  const brandCards = brandsMock.map((item) => <BrandCard image={item.img} />);

  return (
    <div className="overflow-hidden pl-2 flex flex-col gap-4 my-8">
      <h2 className="mx-auto text-2xl lg:text-[2rem] text-primary-gray font-bold">
        Marcas Parceiras
      </h2>
      <div className="hidden  w-full max-w-[100rem] mx-auto  2xl:flex">
        <div className="flex   gap-6">{brandCards}</div>
      </div>
      <div>
        <Slider {...sliderSettings} className="flex 2xl:hidden">
          {brandCards}
        </Slider>
      </div>
    </div>
  );
}
