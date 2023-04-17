import React from "react";
import CartContext from "./../context/auth-context.js";


// using Context Consumer here
const Welcome = () => {
  return (
    <CartContext.Consumer>
      {(ctx) => {
        return (
          <div className="welcome">
            <h1>Welcome userName</h1>
            <p>This is the user decription</p>
            <button onClick={ctx.onLogout}>LOGOUT</button>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
};

export default Welcome;
