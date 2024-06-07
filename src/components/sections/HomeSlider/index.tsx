import { useRef } from "react";
import { sliderMock } from "./mock";
import Slider from "react-slick";

export default function HomeSlider() {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = sliderMock.map((image) => (
    <div className="w-full max-w-[90rem] mx-auto  lg:h-[37.5rem] relative">
      <img
        src={image.mobileImg}
        alt="mobile"
        className="flex md:hidden w-full object-cover"
      />
      <img
        src={image.desktopImg}
        alt="mobile"
        className="hidden md:flex w-full object-cover"
      />

      {image.hasCta && (
        <div className=" text-primary-white absolute z-10 flex flex-col w-[14.68rem] lg:w-[29.375rem] top-[4rem] lg:top-[6rem] left-[5rem] lg:left-[17rem] items-start gap-2">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 max-w-[11rem] lg:max-w-none">
            {image.cta.title}
          </h1>
          <h2 className="text-sm lg:text-xl">{image.cta.subtitle}</h2>
          <button className="w-[4.75rem] h-[1.75rem] lg:w-32 lg:h-12 text-sm lg:text-base bg-primary-yellow flex justify-center items-center font-bold rounded-lg">
            {image.cta.buttonText}
          </button>
        </div>
      )}
    </div>
  ));

  return (
    <div className="">
      <Slider {...settings} ref={sliderRef}>
<p>dffsdf</p>
<p>dffsdf</p>
<p>dffsdf</p>
<p>dffsdf</p>
        </Slider>
    </div>
  );
}
