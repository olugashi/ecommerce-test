import React, { useEffect } from "react";
import { useSelector, useDispatch, useCallback } from "react-redux";
import fetchProducts from "../services/fetchProductsService";
import { getProducts } from "../reducers/fetchProductsReducer";

function ProductView() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.fetchProductsReducer.products);

  //const [products, setProducts] = useSelector([]);

  /*useEffect(() => {
    dispatch(allActions.FetchProductsActions.f);
    //const data1 = fetchProducts;
    //console.log("useEffect " + data1);
    //setProducts(data.Products);
    //console.log(products);
  }, []);*/

  function onFetchdata() {
    //invoking action
    dispatch(fetchProducts());
  }

  useEffect(() => {
    console.log("useEffect " + products);
    onFetchdata();
  }, [products]);

  return <div>products : {products}</div>;
}

export default ProductView;
