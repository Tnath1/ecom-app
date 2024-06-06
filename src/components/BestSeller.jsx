import React from "react";
import { useGetAllProductsQuery } from "../features/product.api";

const BestSeller = () => {
  const { data, error, isLoading, isSuccess } = useGetAllProductsQuery();
  console.log(data)
  return ;
};

export default BestSeller;
