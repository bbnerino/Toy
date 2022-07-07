import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Seo from '../components/Seo'


export default function Home({results}){
  const router = useRouter()
  const onClick = (id,title)=>{
    router.push({
      pathname:`/movies/${id}`,
      query:{
        id,
        title
      }
    },`/movies/${id}`) // as => query 숨기기
  }
  return (
    <div className='container'>
      <Seo title='HOME'/>
      {results?.map((movie)=>{
        return(
          <div onClick={()=>{onClick(movie.id,movie.original_title)}}  key={movie.id}>
            <div className="movie">
                  <h3>{movie.original_title}</h3>
                  <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} /> 
            </div>
          </div>
        )
      })}
       <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.02) translateY(-10px);
          cursor:pointer;
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}
export async function getServerSideProps(){ // 서버사이드렌더링 방법
  const {results} = await (await fetch(`http://localhost:3000/api/movies`
  )).json()
  return {
    props:{
      results,
    }
  }
}

