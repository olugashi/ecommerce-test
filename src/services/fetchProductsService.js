import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError
} from "../actions/fetchProductsActions";

import data from "../components/admin/data";

function fetchProducts() {
  return dispatch => {
    console.log("*********************************************");
    dispatch(fetchProductsPending());
    fetch(data)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchProductsSuccess(res.products));
        return res.products;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchProducts;
