import React from "react";

function LoginAdmin() {
  return (
    <div>
  <div class="ui attached tabular menu">
    <a class="active item">
      <i aria-hidden="true" class="users icon"></i>
      Users
    </a>
    <a class="test item">
      Messages
      <div class="ui label">15</div>
    </a>
  </div>
  <div class="ui bottom attached segment active tab">Tab 1 Content</div>
  <div class="ui bottom attached segment test tab">Tab 2 Content</div>
</div>
  );
}

export default LoginAdmin;
