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

import ScrollToTop from "./components/ScrollToTop";

function App() {
  // useScrollToTop();
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
      <ScrollToTop />
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

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "./store/store";
// import Hero from "./components/Hero";
// import BestSeller from "./components/BestSeller";
// import Footer from "./components/Footer";
// import CallToAction from "./components/CallToAction";
// import Services from "./components/Services";
// import Rating from "./components/Rating";
// import Featured from "./components/Featured";
// import ProductDetail from "./components/ProductDetail"; // Import the ProductDetail component

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <div>
//           <Hero />
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <BestSeller />
//                   <Services />
//                   <Featured />
//                   <Rating />
//                   <CallToAction />
//                 </>
//               }
//             />
//             <Route path="/product/:id" element={<ProductDetail />} />
//           </Routes>
//           <Footer />
//         </div>
//       </Router>
//     </Provider>
//   );
// }

// export default App;
