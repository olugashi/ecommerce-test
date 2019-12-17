import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { Menu, Form, Label } from "semantic-ui-react";

function AdminContainer() {

  function handleClick(e) {
  
    console.log('The link was clicked.');
  }

  return (
    <form className="ui form">
      <h2>Admin Dashboard</h2>
      <div className="field">
        <Label>Admin </Label>
        <input type="text" name="Admin-name" placeholder="Admin Name" />
      </div>
      <div className="field">
        <Label>Password </Label>
        <input type="text" name="Password" placeholder="Password" />
      </div>
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
