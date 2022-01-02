function Movie(props){
  const {movie} = props
  
  return (
  <div>
    <img src={movie.medium_cover_image} alt="title"/>
    <h1>{movie.title}</h1>
    <h4>{movie.summary}</h4>
  </div>)
}
export default Movie