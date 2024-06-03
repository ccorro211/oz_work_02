import { useParams } from "react-router-dom"
import movie from "../store/movielist"
import { useState, useMemo } from "react"

export default function DetailMovie(){
    let a = useParams()
    let [데이터, 데이터변경] = useState(0)
    
    
    useMemo(() => {
        const SelectedMovie = movie.results.find(r => r.id === parseInt(a.id))
        데이터변경(SelectedMovie)
        console.log(데이터)
        
    },[데이터])
    
    return (
        <div className="DetailMovieContainer">
            <div className="movie-poster" style={{backgroundImage : `url(${데이터.backdrop_path})`}}></div>
            <div className="movie-details">
                <div className="movie-detail1">
                    <h1>{데이터.title}</h1>
                    <h1>{데이터.vote_average}</h1>
                </div>
                <div className="movie-detail2">
                {데이터 ==0 ? null : 데이터.genre_ids.map((e)=>{
                        return(<p>genre_id : {e}</p>)
                    })}
                </div>
                <div className="movie-detail3">
                    <p>{데이터.overview}</p>
                </div>

            </div>
        </div>
    )
}