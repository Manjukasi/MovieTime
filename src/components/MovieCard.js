import {Link } from "react-router-dom";

const MovieCard = ({image,name,genres,id}) =>{
    return (
        <div className="card">
            <img src={image.original} alt="image"></img>
            <div className="card-btn"><Link to={"/shows/"+ id}>Watch Now</Link></div>
        </div>
    )
}

export default MovieCard;