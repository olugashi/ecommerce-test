import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchProducts from "../services/fetchProductsService";

function ProductView() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.fetchProductsReducer.products);

  function onFetchdata() {
    dispatch(fetchProducts());
  }

  useEffect(() => {
    console.log("useEffect " + products);
    onFetchdata();
  });

  return <div>products : {products}</div>;
}

export default ProductView;
