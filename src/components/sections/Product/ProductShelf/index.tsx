import Slider from "react-slick";
import { productsMock } from "./mock";
import ProductCard from "../ProductCard";

interface ArrowProps {
  onClick?: () => void;
}

function CustomPrevArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <button className="absolute left-1 bottom-[18rem] z-10 hidden lg:block" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="32"
        fill="none"
        viewBox="0 0 20 32"
      >
        <path
          fill="#000"
          d="M.515 14.756L14.757.515a1.759 1.759 0 012.487 0l1.661 1.661c.686.686.687 1.797.003 2.484L7.621 16l11.286 11.34a1.758 1.758 0 01-.003 2.484l-1.66 1.661c-.687.687-1.801.687-2.488 0L.515 17.243a1.759 1.759 0 010-2.487z"
        ></path>
      </svg>
    </button>
  );
}

function CustomNextArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <button className="absolute right-3 bottom-[18rem] z-10 hidden lg:block" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="32"
        fill="none"
        viewBox="0 0 20 32"
      >
        <path
          fill="#000"
          d="M18.905 17.244L4.663 31.484c-.687.688-1.8.688-2.487 0l-1.66-1.66a1.759 1.759 0 01-.004-2.484L11.8 16 .512 4.66a1.759 1.759 0 01.003-2.484L2.176.516a1.759 1.759 0 012.487 0l14.242 14.24c.686.687.686 1.8 0 2.488z"
        ></path>
      </svg>
    </button>
  );
}

const sliderSettings = {
  dots: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "product-shelf",
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 1.06,
      },
    },
    {
      breakpoint: 610,
      settings: {
        slidesToShow: 1.4,
      },
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 2.04,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2.3,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3.05,
      },
    },
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 4.05,
      },
    },
    {
      breakpoint: 4090,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
};

export default function ProductShelf() {
  const productsShelf = productsMock.map((product) => (
    <ProductCard
      price={product.price}
      productName={product.productName}
      productId={product.productId}
      productDescription={product.productDescription}
      productImg={product.productImg}
      sku={product.sku}
      key={product.productId}
    />
  ));
  return (
    <div className="flex flex-col w-full max-w-[100rem] mx-auto relative px-1 lg:px-0">
      <h2 className="text-primary-gray font-bold mx-auto my-4 lg:text-[32px]">As Mais Pedidas</h2>
      <Slider {...sliderSettings}>{productsShelf}</Slider>
    </div>
  );
}
