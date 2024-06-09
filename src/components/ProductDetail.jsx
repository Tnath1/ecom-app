// import React from "react";
// import "./css/productDetails.css";
// import BestSeller from "./BestSeller";

// const ProductDetail = () => {
//   return (
//     <div>
//       ProductDetail
//       <BestSeller />
//     </div>
//   );
// };

// export default ProductDetail;

// components/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BestSeller from "./BestSeller";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.items);
  const product = products.find((product) => product.id === parseInt(id));

  if (!product)
    return (
      <div>
        <div>
          <p>Please select from the products Below</p>
        </div>
        <BestSeller />
      </div>
    );

  return (
    <div>
      <div>
        <h1>{product.title}</h1>
        <img
          src={product.images[0]}
          alt={product.title}
          style={{ width: "150px", height: "180px" }}
        />
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Rating: {product.rating}</p>
      </div>
      <BestSeller />
    </div>
  );
};

export default ProductDetail;
