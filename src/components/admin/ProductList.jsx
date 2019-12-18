import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import data from "./data";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data.Products);
    console.log(data.Products);
  }, []);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Tags</Table.HeaderCell>
          <Table.HeaderCell>Images</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Edit</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {products.map(product => (
          <Table.Row>
            <td>{product.Id}</td>
            <td>{product.Title}</td>
            <td>{product.Price}</td>
            <td>{product.Tags}</td>
            <td>{product.Images}</td>
            <td>{product.Description}</td>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProductList;
