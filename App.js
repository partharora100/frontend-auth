import React, { useEffect, useState, useContex } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Form from "./src/components/Form";
import Welcome from "./src/components/Welcome";
import AuthContext from "./src/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const formLoginHandler = () => {
    setIsLoggedIn(true);
  };

  const formLogoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <AuthContext.Provider
        value={{
          isLoggedIn: false,
          onLogout: formLogoutHandler,
          onLogin: formLoginHandler,
        }}
      >
        <Header isLoggedIn={isLoggedIn} onFormLogout={formLogoutHandler} />

        {!isLoggedIn && <Form onFormLogin={formLoginHandler} />}

        {isLoggedIn && <Welcome onFormLogout={formLogoutHandler} />}
      </AuthContext.Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
