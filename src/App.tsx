import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <section className="fixed z-40 w-full">
        <Header />
      </section>

      <div className="relative w-full h-full pt-[100px]">
        <Slider />
      </div>

      <div className="pt-10">
        <ProductionHouse />
      </div>

      <GenreMovieList />
    </div>
  );
}

export default App;
