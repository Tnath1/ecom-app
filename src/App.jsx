import "./App.css";
import Hero from "./components/Hero";
import BestSeller from "./components/BestSeller";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import Services from "./components/Services";
import Rating from "./components/Rating";
import Featured from "./components/Featured";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Nav from "./components/Nav";

function App() {
  // return (
  //   <div>
  //     <Hero />
  //     <BestSeller />
  //     <Services />
  //     <Featured />
  //     <Rating />
  //     <CallToAction />
  //     <Footer />
  //   </div>
  // );
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <BestSeller />
                <Services />
                <Featured />
                <Rating />
                <CallToAction />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
