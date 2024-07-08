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

      <div className="pt-[65px]">
        <Slider />
      </div>

      <div className="pt-1">
        <ProductionHouse />
      </div>

      <div className="pt-6">
        <GenreMovieList />
      </div>
    </div>
  );
}

export default App;
