import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Form from "./src/components/Form";
import Welcome from "./src/components/Welcome";
import AuthContext, { AuthContextProvider } from "./src/context/auth-context";

const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <Header />
      {!ctx.isLoggedIn && <Form />}
      {ctx.isLoggedIn && <Welcome />}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
