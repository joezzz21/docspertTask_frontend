import React, { useEffect, useState } from "react";
import Books from "../Components/Books";

function HomePage() {
  //   const { sendRequest, status, error, data } = useHttp(getAllBooks, true);

  //   async function getAllBooks() {
  //     const DOMAIN = "http://localhost:8000";
  //     const response = await fetch(`${DOMAIN}/api/allbooks`);

  //     const data = await response.json();

  //     console.log(data.data);

  //     if (!response.ok) {
  //       throw new Error(data.message || "Could not fetch books.");
  //     }

  //     return { books: data };
  //   }

  const [books, setBooks] = useState(null);

  useEffect(() => {
    async function getAllBooks() {
      const DOMAIN = "http://localhost:8000";
      const response = await fetch(`${DOMAIN}/api/allbooks`);

      const data = await response.json();

      console.log(data.data);

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch books.");
      }

      setBooks(data);
      console.log(data);
    }
    getAllBooks();
  }, []);
  return (
    <>
      {/* <Authors /> */}
      {books != null && <Books data={books} />}
    </>
  );
}

export default HomePage;
