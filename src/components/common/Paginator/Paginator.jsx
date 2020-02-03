import React, { useState } from "react";
import styles from "./Paginator.module.css";

let Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(2);
  let leftPortionPageNumber = Math.ceil((portionNumber - 1) * portionSize + 1);
  let rightPortionPageNumber = Math.ceil(portionNumber * portionSize);
  console.log(rightPortionPageNumber);
  console.log(leftPortionPageNumber);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          prev
        </button>
      )}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return (
            <span
              className={currentPage === p && styles.selectedPage}
              onClick={e => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          next
        </button>
      )}
    </div>
  );
};

export default Paginator;
