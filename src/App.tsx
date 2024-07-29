import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import Info from "./Info";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section>
                  <Slider />
                </section>
                <section>
                  <ProductionHouse />
                </section>
                <section>
                  <GenreMovieList />
                </section>
              </>
            }
          />
          <Route path="/info/:id" element={<Info />} />{" "}
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
