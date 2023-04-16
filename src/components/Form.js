import React, { useState } from "react";
import CartContext from "./../context/auth-context";

const Form = () => {
  const [formValid, setFormValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState();
  const [usernameValid, setusernameValid] = useState();
  const [passwordEntered, setPasswordEntered] = useState();
  const [usernameEntered, setUsernameEntered] = useState();

  // Managing the overall form validity here!!
  const formValidHandler = () => {};

  const usernameChangeHandler = (e) => {
    setUsernameEntered(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPasswordEntered(e.target.value);
  };

  const usernameValidHandler = () => {};

  const passwordValidHandler = () => {};

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // when form is valid we login or ve early return the function
    ctx.onLogin();
  };
  return (
    <CartContext.Consumer>
      {(ctx) => {
        return (
          <div className="form-section">
            <form className="form" onSubmit={formSubmitHandler}>
              <h2>LOGIN FORM</h2>

              <div className="input-container">
                <label>Enter Username</label>
                <input
                  value={usernameEntered}
                  onBlur={usernameValidHandler}
                  onChange={usernameChangeHandler}
                  placeholder="enter username"
                />
              </div>

              <div className="input-container">
                <label>Enter Password</label>
                <input
                  value={passwordEntered}
                  placeholder="enter password"
                  onBlur={passwordValidHandler}
                  onChange={passwordChangeHandler}
                />
              </div>

              <button>LOGIN</button>
            </form>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
};

export default Form;
