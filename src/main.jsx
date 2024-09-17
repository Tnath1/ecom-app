// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { Provider } from "react-redux";
// import { store } from "./data/Store.js";
// // import{ApiSlice} from "./features/ApiSlice.js"
// import { ScrollRestoration } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>

//       <App />
//     </Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./data/Store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home"; 
import ProductDetail from "./components/ProductDetail"; 
import Cart from "./components/Cart.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "/cart", element: <Cart/> },
      // Add more routes as needed
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
