// 搜尋元件，不包含搜尋結果
import React from "react";
// import { useState } from "react";

const Search = ({searchClick}) => {
 
  return (
    <div className="input-group mb-3 p-4">
      <input
        type="text"
        className="form-control"
        placeholder="想看什麼主題呢？"
        aria-label="searchPhoto"
        aria-describedby="searchPhoto"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="searchPhoto"
        onClick={searchClick}
      >
        搜尋
      </button>
    </div>
  );
};

export default Search;
