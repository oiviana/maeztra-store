import Advantages from "../../sections/Advantages";
import Brands from "../../sections/Brands";
import Collection from "../../sections/Collection";
import HomeSlider from "../../sections/HomeSlider";
import Newsletter from "../../sections/Newsletter";
import ProductShelf from "../../sections/Product/ProductShelf";

export default function Main() {
  return (
    <main>
      <HomeSlider />
      <Advantages />
      <Brands />
      <ProductShelf />
      <Collection />
      <Newsletter />
    </main>
  );
}
