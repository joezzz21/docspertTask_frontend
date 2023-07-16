import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

// const PrivateRoute = ({ children, ...rest }) => {
//   let { user } = useContext(AuthContext);
//   return <Route {...rest}>{!user ? <Navigate to="/login" /> : children}</Route>;
// };

const PrivateRoute = ({ children }) => {
  let { user } = useContext(AuthContext); // isauth() returns true or false based on localStorage

  return user && user.role == "Author" ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
