import React from "react";
import { Link } from "react-router-dom";
import { Form, Label } from "semantic-ui-react";

function AdminContainer() {
  return (
    <form className="ui form">
      <h2>Admin Dashboard</h2>
      <Form.Field>
        <Label>Admin </Label>
        <input type="text" name="Admin-name" placeholder="Admin Name" />
      </Form.Field>
      <Form.Field>
        <Label>Password </Label>
        <input type="text" name="Password" placeholder="Password" />
      </Form.Field>
      <div>
        <Link className="ui primary button" type="submit" to="/loginadmin">
          Login
        </Link>
        <button className="ui button" type="Cancel">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AdminContainer;
