import React from "react";
import CartContext from "./../context/auth-context.js";

const Header = () => {
  return (
    <CartContext.Consumer>
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
    </CartContext.Consumer>
  );
};

export default Header;
