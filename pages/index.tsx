import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Home = () => {
  return (
    <div className="flex flex-col bg-teal-100 min-h-screen">
      <Header />
      <main className="flex-grow max-w-2xl mx-auto grid p-6 gap-6 sm:grid-cols-2">
        <img src="https://picsum.photos/id/1060/536/354" alt="Barista" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eligendi
          assumenda dolorum at velit placeat architecto aut? Magni, numquam
          omnis!
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
// p-6 gap-6
