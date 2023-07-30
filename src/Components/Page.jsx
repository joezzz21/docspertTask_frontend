import React, { useContext } from "react";
import classes from "./Page.module.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Page(props) {
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  let { user, authTokens } = useContext(AuthContext);

  function createPage() {
    navigate("/createpage", { state: { book: currentPage.book } });
  }

  function onNextHandler() {
    if (pages.length >= pageNumber + 1) {
      setPageNumber(pageNumber + 1);
      setCurrentPage(pages[pageNumber]);
    }
  }

  function onPreviousHandler() {
    let num = pageNumber - 1;
    if (num > 0) {
      console.log(pageNumber);
      setPageNumber(pageNumber - 1);
      console.log(pageNumber);
      setCurrentPage(pages[pageNumber - 2]);
      console.log(currentPage);
    }
  }

  const id = useParams();

  useEffect(() => {
    async function getAllPages() {
      const DOMAIN = "http://localhost:8000";
      const response = await fetch(`${DOMAIN}/api/pages/${id.bookid}`);

      const data = await response.json();

      console.log(data.data);

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch Pages.");
      }

      setPages(data);
      setCurrentPage(data[0]);
    }
    getAllPages();
  }, []);

  async function updatePage(e) {
    e.preventDefault();
    console.log(e);
    console.log(currentPage);
    const DOMAIN = "http://localhost:8000";
    const response = await fetch(`${DOMAIN}/api/editpage/${currentPage.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authTokens.access,
      },
      body: JSON.stringify({
        text: e.target.editablepage.value,
      }),
    });
    console.log(response);
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || "Could not update Page.");
    } else {
      navigate(`/books/${user.user_id}`);
    }
  }

  async function deletePage(e) {
    e.preventDefault();
    console.log(e);
    console.log(currentPage);
    const DOMAIN = "http://localhost:8000";
    const response = await fetch(`${DOMAIN}/api/deletepage/${currentPage.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authTokens.access,
      },
    });
    console.log(response);
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || "Could not delete Page.");
    } else {
      navigate(`/books/${user.user_id}`);
    }
  }

  return (
    <div className={classes.container}>
      {console.log(currentPage)}
      {location.state != null && location.state.user === "Author" && (
        <button className={classes.button} onClick={createPage}>
          Create Page
        </button>
      )}

      {pages.length == 0 ? (
        <div className={classes.header}>
          {" "}
          <p className={classes.number}> No pages to display</p>{" "}
        </div>
      ) : (
        <>
          {" "}
          <div className={classes.header}>
            {pageNumber !== 1 && (
              <button className={classes.button} onClick={onPreviousHandler}>
                Previous Page
              </button>
            )}

            <p className={classes.number}>Page Number: {pageNumber} </p>

            {pageNumber != pages.length && (
              <button className={classes.button} onClick={onNextHandler}>
                Next Page
              </button>
            )}
          </div>
          <div className={classes.card}>
            {location.state != null &&
            location.state.user === "Author" &&
            currentPage != null ? (
              <form onSubmit={updatePage}>
                <button className={classes.formbutton}>Save</button>
                <button className={classes.button1} onClick={deletePage}>
                  {" "}
                  Delete{" "}
                </button>
                {console.log(currentPage.text)}
                <textarea
                  required
                  className={classes.textedit}
                  name="editablepage"
                  value={currentPage.text || ""}
                  contenteditable
                ></textarea>
              </form>
            ) : (
              <div className={classes.text}>
                {currentPage != null ? currentPage.text : null}
              </div>
            )}
          </div>{" "}
        </>
      )}
    </div>
  );
}

export default Page;
