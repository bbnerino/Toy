import {Link} from 'react-router-dom'
function Movie(props){
  const {movie} = props
  
  return (
  <div>
    <img src={movie.medium_cover_image} alt="title"/>
    <h1><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h1>
    <h4>{movie.summary}</h4>
  </div>)
}
export default Movie