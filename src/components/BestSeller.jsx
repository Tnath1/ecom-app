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

  if (isLoading && page === 1) return <div className="Loading">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div >
      <div>
        
        <div className="flex-products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.images[0]} // Assuming images is an array
                alt={product.title}
                style={{ width: "100px", height: "100px" }}
              />
              <div className="imgtext-below">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <div>
                  <div>{product.discountPercentage}%</div>
                  <div>${product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isLoading && page > 1 && <div className="Loading">Loading more...</div>}
      {products.length < 30 && (
        <button onClick={() => setPage((prevPage) => prevPage + 1)}>
          Load More
        </button>
      )}
    </div>
  );
};

export default BestSeller;
