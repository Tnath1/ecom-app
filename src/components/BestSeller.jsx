

import "../components/css/bestSeller.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../data/product.api";
import { appendProducts, setHasMore } from "../data/apiSlice";



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

  if (isLoading && page === 1) return <div className="loading-container">Loading Products...</div>;
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
