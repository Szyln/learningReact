// 除去共同區塊之外的首頁
import React, { useState } from "react";
import Search from "../component/Search";
import Result from "../component/Result";


const Homepage = () => {
  // 搜尋後從 API 得到的資料
  let [data, setData] = useState(null);
  // API 金鑰
  const auth = "563492ad6f9170000100000149c9637b602348fb9d3df7644d2709a9";
  // 精選相片 API，進入網站就跑
  const initialPhotoURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  // 搜尋的輸入欄資料
  let [input, setInput] = useState("");
  // 搜尋相片 API
  const searchPhotoURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  // 搜尋 button 的事件，接 pexels 精選相片 API
  const searchClick = async () => {
    const dataFetch = await fetch(initialPhotoURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        // API 金鑰
        Authorization: auth,
      },
    });

    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
  };

  return (
    <main className="container-lg">
      <Search searchClick={searchClick} />
      <Result data={data} setData={setData} />
    </main>
  );
};

export default Homepage;
