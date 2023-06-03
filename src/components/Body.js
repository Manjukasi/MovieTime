import MovieCard from "./MovieCard"
import { showlist } from "../config";


const Body = () => {
    return (
        <div className="movie-list">
            {
                showlist.map((shows)=>{
                    return <MovieCard key={shows.show.id} {...shows.show}/>
                })
            }
        </div>
    )
}

export default Body;