import Footer from "./components/Footer";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <header className="fixed z-40 w-full">
        <Header />
      </header>

      <section className="pt-[65px]">
        <Slider />
      </section>

      <section className="pt-1">
        <ProductionHouse />
      </section>

      <section className="pt-6 ">
        <GenreMovieList />
      </section>

      <footer className="mt-[70px]">
        <Footer />
      </footer>
    </>
  );
}

export default App;
