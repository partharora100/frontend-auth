import React, { useState, useEffect } from "react";
import AuthContext from "./../context/auth-context";
import { useContext } from "react";

const Form = () => {
  const ctx = useContext(AuthContext);
  const [formValid, setFormValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordEntered, setPasswordEntered] = useState("");
  const [usernameEntered, setUsernameEntered] = useState("");

  const usernameChangeHandler = (e) => {
    setUsernameEntered(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPasswordEntered(e.target.value);
  };

  const usernameValidHandler = (e) => {
    setUsernameValid(e.target.value.includes("@"));
  };
  const passwordValidHandler = (e) => {
    setPasswordValid(e.target.value.length > 7);
  };

  /**
   * using useEffect to get form Validity with dependency array
   *  this useEffect runs with every key stroke but we dont want to
   *   run that everytime since we are updating a state
   *  in this we also need to clear timeout that are active
   * we useEffect to do cleanup work also
   * **/

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("form valid running");
      setFormValid(
        usernameEntered.includes("@") && passwordEntered.trim().length > 7
      );
    }, 500);

    /**
     * doing the cleanup process
     * this will not on the first render
     * since it runs after first side effect cycle
     * this clean also runs after we unmount the component from
     * the DOM
     */
    return () => {
      console.log("CLEAN UP FUNCTION");
      clearTimeout(identifier);
    };
  }, [passwordEntered, usernameEntered]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // we dont need a formValid Handler since we are only allowing user to submit the form once it is valid via the state updates
    ctx.onLogin(usernameEntered, passwordEntered);
  };

  return (
    <div className="form-section">
      <form className="form" onSubmit={formSubmitHandler}>
        <h2>LOGIN FORM</h2>

        <div className="input-container">
          <label>Enter Username</label>
          <input
            type="email"
            value={usernameEntered}
            onBlur={usernameValidHandler}
            onChange={usernameChangeHandler}
            placeholder="enter username"
          />
        </div>

        <div className="input-container">
          <label>Enter Password</label>
          <input
            type="password"
            value={passwordEntered}
            placeholder="enter password"
            onBlur={passwordValidHandler}
            onChange={passwordChangeHandler}
          />
        </div>

        <button disabled={formValid ? false : true}>LOGIN</button>
      </form>
    </div>
  );
};

export default Form;
