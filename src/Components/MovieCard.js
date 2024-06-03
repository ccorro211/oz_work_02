
import { Link } from "react-router-dom"
const MovieCard = (props)=>{
    
    return (
        <div className="Cardcontainer">
            <Link to={"/detail/"+props.item.id}>
                <div className="movieitem">
                        <img src={props.item.backdrop_path} className="poster" alt=""/>
                        <div className="movieinfo">
                            <p>{props.item.title}</p>
                            <p>{props.item.vote_average}</p>
                        </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard