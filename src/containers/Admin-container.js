import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { Menu, Form, Label } from "semantic-ui-react";

function AdminContainer() {
  return (
    <form class="ui form">
      <h2>Admin Dashboard</h2>
      <div class="field">
        <Label>Admin </Label>
        <input type="text" name="Admin-name" placeholder="Admin Name" />
      </div>
      <div class="field">
        <Label>Password </Label>
        <input type="text" name="Password" placeholder="Password" />
      </div>
      <div>
        <button class="ui primary button" type="submit">
          Login
        </button>
        <button class="ui button" type="Cancel">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AdminContainer;
