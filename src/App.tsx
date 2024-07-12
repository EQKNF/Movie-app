import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import Info from "./components/Info"; // Import the Info component
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
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
      <ScrollToTop />
    </Router>
  );
}

export default App;
