import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function TestView() {
  const content = useSelector(state => state);
  const dispatch = useDispatch();

  function getData() {
    return dispatch => {
      axios.get("https://jsonplaceholder.typicode.com/todos/1").then(res =>
        dispatch({
          type: "FETCH_DATA",
          data: res.data
        })
      );
    };
  }

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="TestView">
      {content.data && (
        <ul>
          <li>{content.data.id}</li>
          <li>{content.data.title}</li>
        </ul>
      )}
    </div>
  );
}

export default TestView;
