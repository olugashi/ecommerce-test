import React from "react";
import { Tab } from "semantic-ui-react";
import ProductList from "./ProductList";
import AdminFormAddItem from "./Admin-form-add-item";

const panes = [
  {
    menuItem: "Products",
    render: () => (
      <Tab.Pane>
        <ProductList />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Add Product",
    render: () => (
      <Tab.Pane>
        <AdminFormAddItem />
      </Tab.Pane>
    )
  },
  { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
];
function dashboard() {
  return (
    <div>
      <Tab panes={panes} />
    </div>
  );
}

export default dashboard;
