
import { useEffect, useState } from 'react'
import {Link,useParams} from 'react-router-dom'

function Detail(){
  const {id} = useParams()
  const [movie,setMovie] = useState([])
  const getMovie = async()=>{
    const json = await(
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json()
    console.log(json)
    console.log(json.data.movie)
    setMovie(json.data.movie)
  }
  useEffect(()=>{
    getMovie()
  },[])
  return (
  <div>
    <h1>{movie.title}</h1>
    <h1>{movie.overview}</h1>
    <img src={`${movie.medium_cover_image}`}></img>
    <Link to="/"><h1>돌아가기</h1></Link>
    <h4>id:{id}번</h4>
    {/* [id:'23232'] */}
  </div>
)
}
export default Detail