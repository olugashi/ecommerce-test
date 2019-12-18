import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/fetchProductsService";

function ProductView() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    async function fetchData() {
      const result = await fetchProducts();
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="ProductView">
      <h1>This is ProductView</h1>
    </div>
  );
}

export default ProductView;
