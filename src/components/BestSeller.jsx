// import "../components/css/bestSeller.css";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useGetAllProductsQuery } from "../data/product.api";

// const BestSeller = () => {
//   const [page, setPage] = useState(1);
//   const { data, error, isLoading, isSuccess } = useGetAllProductsQuery({
//     skip: (page - 1) * 10,
//     limit: 10,
//   });

//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isSuccess && data) {
//       setProducts((prevProducts) => [...prevProducts, ...data.products]);
//     }
//   }, [data, isSuccess]);

//   if (isLoading && page === 1)
//     return (
//       <div className="loading-container">
//         <div className="Loading">Loading...</div>
//       </div>
//     );
//   if (error) return <div>Error: {error.message}</div>;

//   const handleProductClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   return (
//     <>
//       <div>
//         <div className="flex-products">
//           {products.map((product) => (
//             <div
//               className="product-card"
//               key={product.id}
//               onClick={() => handleProductClick(product.id)}
//             >
//               <div className="product-img">
//                 <img
//                   src={product.images[0]}
//                   alt={product.title}
//                   style={{ width: "150px", height: "180px" }}
//                 />
//               </div>
//               <div className="imgtext-below">
//                 <div className="txt-flex">
//                   <h4>{product.title}</h4>
//                 </div>
//                 <div className="txt-flex">
//                   <p>{product.description}</p>
//                 </div>
//                 <div className="price-container">
//                   <div className="discount">
//                     {product.discountPercentage}% off
//                   </div>
//                   <div className="price">${product.price}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {isLoading && page > 1 && <div className="Loading">Loading more...</div>}
//       {products.length < 30 && (
//         <div className="div-button">
//           <button
//             className="load-more"
//             onClick={() => setPage((prevPage) => prevPage + 1)}
//           >
//             Load More Products
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default BestSeller;

// components/BestSeller.jsx


import "../components/css/bestSeller.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../data/product.api";
import { appendProducts, setHasMore } from "../data/apiSlice";

// const BestSeller = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { data, error, isLoading, isSuccess } = useGetAllProductsQuery({
//     skip: 0,
//     limit: 10,
//   });

//   useEffect(() => {
//     if (isSuccess && data) {
//       dispatch(appendProducts(data.products));
//       dispatch(setHasMore(data.products.length === 10)); // Assuming the API returns 100 products at a time
//     }
//   }, [dispatch, isSuccess, data]);

//   const products = useSelector((state) => state.products.items);
//   const hasMore = useSelector((state) => state.products.hasMore);

//   const handleProductClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   if (isLoading) return <div className="loading-container">Loading...</div>;
//   if (error) return <div className="error-container">Error: {error.message}</div>;

//   return (
//     <>
//       <div>
//         <div className="flex-products">
//           {products.map((product) => (
//             <div
//               className="product-card"
//               key={product.id}
//               onClick={() => handleProductClick(product.id)}
//             >
//               <div className="product-img">
//                 <img
//                   src={product.images[0]}
//                   alt={product.title}
//                   style={{ width: "150px", height: "180px" }}
//                 />
//               </div>
//               <div className="imgtext-below">
//                 <div className="txt-flex">
//                   <h4>{product.title}</h4>
//                 </div>
//                 <div className="txt-flex">
//                   <p>{product.description}</p>
//                 </div>
//                 <div className="price-container">
//                   <div className="discount">
//                     {product.discountPercentage}% off
//                   </div>
//                   <div className="price">${product.price}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {isLoading && <div className="loading-container">Loading more...</div>}
//       {hasMore && (
//         <div className="div-button">
//           <button
//             className="load-more"
//             onClick={() => dispatch(fetchData())}
//           >
//             Load More Products
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default BestSeller;



const BestSeller = () => {
  const [page, setPage] = useState(1);  // Track the current page
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading, isSuccess } = useGetAllProductsQuery({
    skip: (page - 1) * 10,
    limit: 10,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(appendProducts(data.products));
      dispatch(setHasMore(data.products.length === 10)); // Assuming the API returns 10 products at a time
    }
  }, [dispatch, isSuccess, data]);

  const products = useSelector((state) => state.products.items);
  const hasMore = useSelector((state) => state.products.hasMore);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (isLoading && page === 1) return <div className="loading-container">Loading...</div>;
  if (error) return <div className="error-container">Error: {error.message}</div>;

  return (
    <>
      <div>
        <div className="flex-products">
          {products.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            >
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
                  <div className="discount">
                    {product.discountPercentage}% off
                  </div>
                  <div className="price">${product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isLoading && page > 1 && <div className="loading-container">Loading more...</div>}
      {hasMore && (
        <div className="div-button">
          <button className="load-more" onClick={handleLoadMore}>
            Load More Products
          </button>
        </div>
      )}
    </>
  );
};

export default BestSeller;








// BestSeller.jsx

// import "../components/css/bestSeller.css";
// import { useNavigate } from "react-router-dom";
// import { useGetAllProductsQuery } from "../features/product.api";

// const BestSeller = () => {
//   const navigate = useNavigate();
//   const { data, isLoading, error } = useGetAllProductsQuery({
//     skip: 0,
//     limit: 10,
//   });

//   const handleProductClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   if (isLoading) return <div className="loading-container">Loading...</div>;
//   if (error) return <div className="error-container">Error: {error}</div>;

//   return (
//     <>
//       <div>
//         <div className="flex-products">
//           {data.products.map((product) => (
//             <div
//               className="product-card"
//               key={product.id}
//               onClick={() => handleProductClick(product.id)}
//             >
//               <div className="product-img">
//                 <img
//                   src={product.images[0]}
//                   alt={product.title}
//                   style={{ width: "150px", height: "180px" }}
//                 />
//               </div>
//               <div className="imgtext-below">
//                 <div className="txt-flex">
//                   <h4>{product.title}</h4>
//                 </div>
//                 <div className="txt-flex">
//                   <p>{product.description}</p>
//                 </div>
//                 <div className="price-container">
//                   <div className="discount">
//                     {product.discountPercentage}% off
//                   </div>
//                   <div className="price">${product.price}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Example condition to load more */}
//       {data.hasMore && (
//         <div className="div-button">
//           <button className="load-more" onClick={() => data.fetchNextPage()}>
//             Load More Products
//           </button>
//         </div>
//       )}
//     </>
//   );
// };
