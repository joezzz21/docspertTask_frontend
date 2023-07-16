import React from "react";
import classes from "./Page.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Page(props) {
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(null);

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

  return (
    <div className={classes.container}>
      {console.log(currentPage)}
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
        <div className={classes.text}>
          {" "}
          {currentPage != null ? currentPage.text : null}
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue
          lectus sit amet velit condimentum bibendum. Nam blandit tempor
          interdum. Vestibulum a scelerisque enim. Sed non consequat enim. In et
          efficitur velit, dignissim consequat neque. Vestibulum vel venenatis
          turpis, eu efficitur tortor. Pellentesque feugiat, lectus vitae
          molestie efficitur, odio nisi consequat felis, sagittis volutpat massa
          ligula eu magna. Proin rhoncus imperdiet lectus eget consectetur.
          Nullam convallis lacus et vulputate malesuada. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Suspendisse molestie mauris quis tincidunt hendrerit. Cras
          faucibus risus sit amet ipsum luctus, sit amet gravida velit rutrum.
          Nullam lacus lorem, molestie eu quam viverra, commodo elementum sem.
          Mauris eleifend venenatis libero non euismod. Quisque vel blandit
          velit, eleifend pellentesque purus. Maecenas luctus leo at eros
          vestibulum consequat. Ut id mauris metus. Aliquam sed felis a lorem
          mollis condimentum. Nunc egestas, lorem et elementum pulvinar, neque
          odio malesuada risus, in aliquam purus purus ut ante. Aenean eget nisl
          elit. Pellentesque a mauris sed mi tristique commodo nec nec nisl.
          Fusce vitae quam mattis, commodo odio ornare, blandit elit. Sed a dui
          non odio pulvinar bibendum. Duis nisl arcu, tincidunt eget nisi nec,
          dapibus volutpat eros. Morbi tellus magna, tempor non justo vel,
          tincidunt commodo urna. Vestibulum pulvinar nisl ipsum, at vulputate
          tortor lacinia a. Cras scelerisque lacus sit amet euismod maximus.
          Nunc rutrum lobortis purus, ac vestibulum lorem viverra ac. Vestibulum
          at est quis tortor tristique mattis sit amet sit amet lorem. Praesent
          volutpat nibh id ex egestas, ut eleifend dui pharetra. Nullam
          tincidunt mauris hendrerit arcu tincidunt, sit amet feugiat nisl
          mattis. In turpis diam, blandit sed tempor quis, ultricies at arcu.
          Etiam et placerat massa, quis aliquam elit. Nam fringilla nibh tellus,
          a blandit quam placerat et. Maecenas vulputate vehicula odio, quis
          pulvinar mauris pretium convallis. Phasellus turpis nisl, semper ac
          placerat ut, venenatis congue tellus. Donec elit libero, egestas quis
          facilisis eget, iaculis et justo. Integer condimentum vehicula
          consectetur. Integer sodales leo libero, in vulputate velit tristique
          quis. In in lacinia lorem. Praesent convallis elit vel est iaculis
          scelerisque. Nullam vitae rhoncus ligula. Etiam a massa scelerisque,
          euismod elit faucibus, gravida odio. Nam bibendum, enim sit amet
          gravida condimentum, enim quam lobortis sem, ut malesuada risus magna
          et lorem. Suspendisse ac rutrum est. Maecenas bibendum ligula ante.
          Praesent euismod erat quis lacinia malesuada. Proin eu nisi eget nisi
          consequat rhoncus quis sit amet elit. Donec sed sollicitudin est. Duis
          lacinia finibus pretium. Proin vitae ligula faucibus, tempor sapien
          eu, malesuada dolor. Nulla at nulla porta, aliquet libero id,
          tristique odio. Sed condimentum tortor sit amet turpis pretium
          egestas. Sed gravida, mi id pulvinar fringilla, orci est sodales
          mauris, pellentesque porttitor ex dolor eget lacus. Cras elementum
          placerat ligula et fringilla. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Suspendisse sollicitudin nulla ut ante
          pretium consectetur. Ut euismod sapien quis felis cursus mollis.
          Suspendisse quis lacus tortor. Integer vestibulum libero ut accumsan
          sagittis. Integer posuere efficitur sodales. Aliquam tortor velit,
          condimentum sit amet.{" "} */}
        </div>
      </div>
    </div>
  );
}

export default Page;
