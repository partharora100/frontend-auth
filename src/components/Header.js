import React from "react";
import AuthContext from "./../context/auth-context.js";

const Header = () => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <div className="header">
            <div className="logo">AuthLogo</div>
            <nav>
              <ul>
                <li>Admin</li>
                <li>Link2</li>
                {ctx.isLoggedIn && (
                  <button onClick={ctx.onLogout} className="header-btn">
                    LOGOUT
                  </button>
                )}
              </ul>
            </nav>
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Header;
