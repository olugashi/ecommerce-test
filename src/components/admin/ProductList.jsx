import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import data from "./data";

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data.Products);
    //console.log(data.Products);
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
          <Table.Row key={product.Id}>
            <Table.Cell>{product.Id}</Table.Cell>
            <Table.Cell>{product.Title}</Table.Cell>
            <Table.Cell>{product.Price}</Table.Cell>
            <Table.Cell>{product.Tags}</Table.Cell>
            <Table.Cell>{product.Images}</Table.Cell>
            <Table.Cell>{product.Description}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProductList;
