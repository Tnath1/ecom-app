// import React from "react";
// import { useGetAllProductsQuery } from "../features/product.api";

// const BestSeller = () => {
//   const { data, error, isLoading, isSuccess } = useGetAllProductsQuery();
//   console.log(data);
//   if (isLoading) return <div className="Loading">Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   if (isSuccess && data) {
//     return (
//       <div>
//         <div></div>
//         <div>
//           {data.products.map((product) => (
//             <div key={product.id}>
//               <img
//                 src={product.images}
//                 alt={product.title}
//                 style={{ width: "100px", height: "100px" }}
//               />
//               <p>{product.title}</p>
//               <p>{product.description}</p>
//               <div>
//                 <div>{product.discountPercentage}</div>
//                 <div>{product.price}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return null;
// };

// export default BestSeller;
import "../components/css/bestSeller.css";
import React, { useState, useEffect } from "react";
import { useGetAllProductsQuery } from "../features/product.api";

const BestSeller = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isSuccess } = useGetAllProductsQuery({
    skip: (page - 1) * 10,
    limit: 10,
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (isSuccess && data) {
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
    }
  }, [data, isSuccess]);

  if (isLoading && page === 1) return <div className="loading-container"><div className="Loading">Loading...</div></div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="product-header">
          <h3>Featured Products</h3>
          <h2>BESTSELLER PRODUCCTS</h2>
          <p>Problems trying to resolve the conflict between </p>
        </div>
      <div>
      
        <div className="flex-products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
            <div className="product-img">
            <img
                src={product.images[0]}
                alt={product.title}
                style={{ width: "150px", height: "180px" }}
              />
            </div>
              <div className="imgtext-below">
                <div className="txt-flex">
                  <h4>{product.title}</h4>
                </div>
                <div className="txt-flex">
                  <p>{product.description}</p>
                </div>
                <div className="price-container">
                  <div className="discount">{product.discountPercentage }% off</div>
                  <div className="price">${product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isLoading && page > 1 && <div className="Loading">Loading more...</div>}
      {products.length < 30 && (
        <div className="div-button">
          <button
            className="load-more"
            onClick={() => setPage((prevPage) => prevPage + 1)}
          >
            Load More Products
          </button>
        </div>
      )}
    </>
  );
};

export default BestSeller;
