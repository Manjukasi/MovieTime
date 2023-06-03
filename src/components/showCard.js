import { useParams } from "react-router";
import { useEffect, useState } from "react";

const Details = () =>{
    const params = useParams();
    const {id} = params;

    const [movieDetail, setMovieDetail] = useState({});

    useEffect(()=>{
        callDetails()
      },[])

      async function callDetails() {
        const data = await fetch("https://api.tvmaze.com/shows/"+ id)     
        const json = await data.json();
        console.log(json) 
        setMovieDetail(json)       
    } 

    const {image,name,runtime,genres,language} = movieDetail;

  
    return (
        <div className="container"> 
            <div><img className="img" src={image?.original} alt="image"></img></div>
            <div className="description">
               <div>Title: {name}</div>
               <div>Runtime: {runtime} minutes</div>
               <div>Genres: {genres}</div>
               <div>Language: {language}</div>
               <div><button className="btn">Watch Now</button></div>
            </div>
        </div>
    )
}

export default Details;