import React from "react";

const Picture = ({ data }) => {
  console.log('Picture Component')
  return (
    <div className="col mb-5">
      <div className="ratio ratio-1x1">
        <img src={data.src.large} className="fit-cover" alt="" />
      </div>
      <ul className="list-unstyle">
        <li>拍攝者：{data.photographer}</li>
        <li>
          <a target="_blank" href={data.src.large}>
            下載圖片
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Picture;
