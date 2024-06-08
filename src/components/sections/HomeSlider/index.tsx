import { useEffect, useState } from "react";
import { sliderMock } from "./mock";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const images = sliderMock.map((image, index) => (
    <div className="relative flex flex-shrink-0 w-full h-full" key={index}>
      <img
        src={image.mobileImg}
        alt="mobile"
        className="flex md:hidden w-full h-full object-cover"
      />
      <img
        src={image.desktopImg}
        alt="mobile"
        className="hidden md:flex w-full h-full object-cover"
      />

      {image.hasCta && (
        <div className="z-[999] text-primary-white absolute flex flex-col w-[14.68rem] lg:w-[29.375rem] top-[4rem] lg:top-[9rem] left-[5rem] lg:left-[17rem] xl:left-[26rem] items-start gap-5 font-montserrat">
          <h1 className="text-3xl lg:text-4xl font-bold mb-6 max-w-[11rem] lg:max-w-none">
            {image.cta.title}
          </h1>
          <h2 className="text-sm lg:text-xl">{image.cta.subtitle}</h2>
          <button className="w-[4.75rem] h-[1.75rem] lg:w-32 cursor-pointer lg:h-12 text-sm lg:text-base bg-primary-yellow flex justify-center items-center font-bold rounded-lg">
            {image.cta.buttonText}
          </button>
        </div>
      )}
    </div>
  ));

  const prevSlide = () =>
    setCurrentSlide((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const nextSlide = () =>
    setCurrentSlide((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);

    return () => clearInterval(slideInterval);
  });

  return (
    <div className="w-full max-w-[200rem] mx-auto  overflow-hidden relative">
      <div
        className="flex transition-transform ease-in-out duration-300"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images}
      </div>
      <div className="absolute inset-0 flex items-center justify-between mx-auto w-full max-w-[80%] text-primary-gray">
        <button onClick={prevSlide}>
          <FaChevronLeft size={30} />
        </button>
        <button onClick={nextSlide}>
          <FaChevronRight size={30} />
        </button>
      </div>
      <div className="absolute bottom-4 md:bottom-6 lg:bottom-5 right-0 left-0">
        <div className="flex items-center justify-center gap-4">
          {images.map((_, i) => (
            <div
              className={`transition-all w-2 h-2 lg:w-4 lg:h-4 border-[1px] border-primary-yellow rounded-full cursor-pointer ${
                i === currentSlide && "bg-primary-yellow"
              }`}
              onClick={() => setCurrentSlide(i)}
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
