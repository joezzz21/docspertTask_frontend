import React, { useEffect, useState, useContext } from "react";
import MyBook from "../Components/MyBook";
import AuthContext from "../context/AuthContext";

function MyBooks() {
  const [books, setBooks] = useState(null);
  let { user, authTokens } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    async function getMyBooks() {
      const DOMAIN = "http://localhost:8000";
      const response = await fetch(`${DOMAIN}/api/books/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authTokens.access,
        },
      });

      const data = await response.json();

      console.log(user);

      console.log(data.data);

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch books.");
      }

      setBooks(data);
      console.log(data);
    }
    getMyBooks();
  }, []);
  return (
    <>
      {/* <Authors /> */}
      {books != null && <MyBook data={books} user={user.role} />}
    </>
  );
}

export default MyBooks;
