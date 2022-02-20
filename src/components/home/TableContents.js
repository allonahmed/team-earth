import React from "react";
import TableData from "./TableContent.data";

const TableContents = () => {
  return (
    <div className="table-container">
      <ol>
        {TableData.map((data) => {
          return (
            <li key={data}>
              <a href="#">{data.title}</a>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TableContents;
