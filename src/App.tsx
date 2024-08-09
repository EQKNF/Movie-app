import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import Info from "./Info";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Preloader />
      ) : (
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
      )}
    </div>
  );
}

export default App;
