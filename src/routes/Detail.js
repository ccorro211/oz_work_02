import MovieCard from "../Components/MovieCard"
import movie from "../store/movielist"

const Detail = ()=>{
    return (
        <div className="Detailcontainer">
            {movie.results.map((e) => {
                return (
                    <MovieCard item={e}/>
                )
            })}
        </div>
    )
}

export default Detail