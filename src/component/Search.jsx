// 搜尋元件，不包含搜尋結果
import React from "react";
// import { useState } from "react";

const Search = ({ getData, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const searchSubmit = (e) => {
    e.preventDefault()
    getData()
  };
  return (
    <form onSubmit={searchSubmit}>
      <div className="input-group mb-3 p-4">
        <input
          type="text"
          className="form-control"
          placeholder="想看什麼主題呢？"
          aria-label="searchPhoto"
          aria-describedby="searchPhoto"
          onChange={inputHandler}
        />
        <input
          className="btn btn-outline-secondary"
          type="submit"
          id="searchPhoto"
          value="搜尋"
        />
      </div>
    </form>
  );
};

export default Search;
