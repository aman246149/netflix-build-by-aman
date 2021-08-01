import React, { useEffect, useState } from "react";
import "./Row.css";
import Axios from "../../NetRequests/Axios";
import { saveAs } from 'file-saver'


function Row(props) {
  const [data, setData] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    Axios.get(props.fetchUrl).then((response) => {
      setData(response.data.results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function downloadImage(imageurl,name){
    if(name){
      name="image"
    }
    saveAs(imageurl, name)
    console.log(imageurl)
  }

  return (
    <>
      <div className="row">
        <h1>{props.title}</h1>
        <div className="imageContainer">
          {data.map((elem) => {
            return (
             <div >
              <img 
              key={elem.id}
              src={`${base_url}${elem.backdrop_path}`} alt="imagerow" />
              <button className="download" onClick={()=>downloadImage(`${base_url}${elem.backdrop_path}`,`${elem?.name}`)}>Download</button>
             </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Row;
