import Advantages from "../../sections/Advantages";
import Brands from "../../sections/Brands";
// import Collection from "../../sections/Collection";
import HomeSlider from "../../sections/HomeSlider";
import Newsletter from "../../sections/Newsletter";

export default function Main() {
  return (
    <main className="">
      <HomeSlider />
      <Advantages/>
      <Brands/>
      <Newsletter/>
    </main>
  );
}
