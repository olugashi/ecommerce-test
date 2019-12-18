import React, { useEffect, useState, useDispatch, useSelector } from "react";
import fetchProducts from "../services/fetchProductsService";

import data from "../components/admin/data";
import { bindActionCreators } from "redux";

function ProductView() {
  //const dispatch = useDispatch();
  //const products = useSelector(state => state.products);
  const [products, setProducts] = useState([]);

  useEffect(
    dispatch => {
      //bindActionCreators({ fetchProducts }, dispatch);
      const data1 = fetchProducts;
      console.log("useEffect " + data1);
      setProducts(data.Products);
      //console.log(products);
    },
    [products]
  );

  /* useEffect( dispatch => bindActionCreators({
    fetchProducts
}, dispatch),[])*/

  return (
    <div className="ProductView">
      <h1>This is ProductView</h1>
    </div>
  );
}

export default ProductView;
