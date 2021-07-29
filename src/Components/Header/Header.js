import React, { useEffect, useState } from 'react'
import "./Header.css"
import Axios from '../../NetRequests/Axios'
import requests from '../../NetRequests/Request'

function Header(props) {

    const[data,setData]=useState();

    useEffect(()=>{
        Axios.get(requests.fetchNetflixOriginals).then((response)=>{
            console.log(data)
            setData(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])
        }).catch(err=>console.log(err))
   return;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${data?.backdrop_path}")`,
            backgroundPosition:"center center"
        }}> 

        <div className="banner__contents">
            <h1 className="banner__title">{data?.name}</h1>
            <div className="banner__buttons">
                <button  className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            <h1 className="banner__description">
                {data?.overview}
                {/* {truncate(movie?.overview,150)} */}
            </h1>
        </div>

        <div className="banner__fadeBottom"></div>
            
        </header>
    )
}

export default Header
