import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { ProductDetails } from "../components/Product";

const DATA = {
  id: 1,
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eligendi
  assumenda dolorum at velit placeat architecto aut? Magni, numquam
  omnis!`,
  thumbailUrl: `https://picsum.photos/id/1060/536/354`,
  thumbailAlt: `Barista parzy kawe`,
  rating: 4.5,
};

const Home = () => {
  return (
    <div className="flex flex-col bg-teal-100 h-screen ">
      <Main>
        <ProductDetails data={DATA} />
      </Main>
    </div>
  );
};

export default Home;
