import React from "react";
import Picture from "../component/Picture";

const Result = ({data, setData}) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-">
      {/*Cannot read property "map" of null 問題：useState 預設值為 null */}
      {
        data && data.map(item => 
          <Picture data={item} />
        )
      }
    </div>
  );
};

export default Result;
