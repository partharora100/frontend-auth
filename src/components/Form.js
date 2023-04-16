import React, { useState } from "react";
import AuthContext from "./../context/auth-context";
import { useContext } from "react";

const Form = () => {
  const [formValid, setFormValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState("");
  const [usernameEntered, setUsernameEntered] = useState("");

  const ctx = useContext(AuthContext);

  const usernameChangeHandler = (e) => {
    setUsernameEntered(e.target.value);

    setFormValid(usernameEntered.includes("@") && passwordEntered.length > 7);
  };

  const passwordChangeHandler = (e) => {
    setPasswordEntered(e.target.value);

    setFormValid(usernameEntered.includes("@") && passwordEntered.length > 7);
  };

  // need to understand why this is required
  const formValidHandler = (email, password) => {
    if (usernameEntered.includes("@") && passwordEntered.length > 7) {
      return true;
    } else {
      return false;
    }
  };

  const usernameValidHandler = (e) => {
    setUsernameValid(e.target.value.includes("@"));
  };

  const passwordValidHandler = (e) => {
    setPasswordValid(e.target.value.length > 7);
  };

  // this is executed on the click of the form
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (formValid) {
      ctx.onLogin({ username: usernameEntered, password: passwordEntered });
    } else {
      alert("Wrong Credentials");
    }
  };

  return (
    // <AuthContext.Consumer>
    //   {(ctx) => {
    //     return (
    //       <div className="form-section">
    //         <form className="form" onSubmit={ctx.onLogin}>
    //           <h2>LOGIN FORM</h2>

    //           <div className="input-container">
    //             <label>Enter Username</label>
    //             <input
    //               value={usernameEntered}
    //               onBlur={usernameValidHandler}
    //               onChange={usernameChangeHandler}
    //               placeholder="enter username"
    //             />
    //           </div>

    //           <div className="input-container">
    //             <label>Enter Password</label>
    //             <input
    //               value={passwordEntered}
    //               placeholder="enter password"
    //               onBlur={passwordValidHandler}
    //               onChange={passwordChangeHandler}
    //             />
    //           </div>

    //           <button>LOGIN</button>
    //         </form>
    //       </div>
    //     );
    //   }}
    // </AuthContext.Consumer>

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
};

export default Form;
