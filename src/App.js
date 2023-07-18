import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Authors from "./Components/Authors";
import Books from "./Components/Books";
import Page from "./Components/Page";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyBooks from "./pages/MyBooks";
import EditBook from "./Components/EditBook";
import AddBook from "./Components/AddBook";
import AddPage from "./Components/AddPage";

function App(props) {
  // const bookid = useParams();
  return (
    <div>
      <Router>
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route element={<HomePage />} path="/" exact />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<Page />} path="/book/:bookid" />
            {/* <Route element={<MyBooks />} path="/books/:userid" /> */}
            <Route
              element={
                <PrivateRoute>
                  <MyBooks />
                </PrivateRoute>
              }
              path="/books/:userid"
            />
            <Route
              element={
                <PrivateRoute>
                  <EditBook />
                </PrivateRoute>
              }
              path="/editbook/:bookid"
            />
            <Route
              element={
                <PrivateRoute>
                  <AddBook />
                </PrivateRoute>
              }
              path="/createbook"
            />
            <Route
              element={
                <PrivateRoute>
                  <AddPage />
                </PrivateRoute>
              }
              path="/createPage"
            />
          </Routes>
        </AuthProvider>
      </Router>
      {/* <NavBar />
        <Authors />
        <Books /> */}
      {/* <Page /> */}
    </div>
  );
}

export default App;
