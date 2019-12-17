import React from "react";

function LoginAdmin() {
  return (
    <div>
  <div className="ui attached tabular menu">
    <a className="active item">
      <i aria-hidden="true" className="users icon"></i>
      Users
    </a>
    <a className="test item">
      Messages
      <div className="ui label">15</div>
    </a>
  </div>
  <div className="ui bottom attached segment active tab">Tab 1 Content</div>
  <div className="ui bottom attached segment test tab">Tab 2 Content</div>
</div>
  );
}

export default LoginAdmin;
