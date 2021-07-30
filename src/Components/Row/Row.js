import React, { useEffect, useState } from "react";
import "./Row.css";
import Axios from "../../NetRequests/Axios";

function Row(props) {
  const [data, setData] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    Axios.get(props.fetchUrl).then((response) => {
      setData(response.data.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="row">
        <h1>{props.title}</h1>
        <div className="imageContainer">
          {data.map((elem) => {
            return (
              <img 
              key={elem.id}
              src={`${base_url}${elem.backdrop_path}`} alt="imagerow" />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Row;
