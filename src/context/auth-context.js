import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

// *******************************************
export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storagekey = localStorage.getItem("isLoggedIn");
    if (storagekey === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const formLoginHandler = (username, password) => {
    setIsLoggedIn(true);
    const userObj = { username, password };
    console.log(userObj);
    localStorage.setItem("isLoggedIn", "1");
  };

  const formLogoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: formLogoutHandler,
        onLogin: formLoginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
