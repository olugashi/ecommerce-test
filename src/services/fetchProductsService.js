import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError
} from "../actions/fetchProductsActions";

function fetchProducts() {
  //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
  return dispatch => {
    //console.log("*********************************************");
    dispatch(fetchProductsPending());
    fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        res.payload = res.userId;
        //console.log("fetch Products :" + res.payload);
        dispatch(fetchProductsSuccess(res.payload));
        return res.payload;
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchProducts;
