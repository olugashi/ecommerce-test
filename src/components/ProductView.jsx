import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchProducts from "../services/fetchProductsService";

function ProductView() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.fetchProductsReducer);

  //const [products, setProducts] = useSelector([]);

  /*useEffect(() => {
    dispatch(allActions.FetchProductsActions.f);
    //const data1 = fetchProducts;
    //console.log("useEffect " + data1);
    //setProducts(data.Products);
    //console.log(products);
  }, []);*/

  useEffect(() => {
    dispatch(fetchProducts());
    console.log(products);
  }, [dispatch]);

  return <div>products </div>;
}

export default ProductView;
